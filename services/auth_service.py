import os
from sqlmodel import Session, select
from dotenv import load_dotenv
from models.user import User, UserStatus
from auth_utils import get_password_hash, verify_password, create_access_token, blacklist_token, create_password_reset_token, verify_password_reset_token

load_dotenv()

DEV_MODE = os.getenv("DEV_MODE", "false").lower() == "true"
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")


def register_user(session: Session, username: str, email: str, password: str) -> User:
    if session.exec(select(User).where(User.username == username)).first():
        raise ValueError("Username already registered")
    if session.exec(select(User).where(User.email == email)).first():
        raise ValueError("Email already registered")

    user = User(username=username, email=email, hashed_password=get_password_hash(password))
    session.add(user)
    session.commit()
    session.refresh(user)
    return user


def authenticate_user(session: Session, username: str, password: str) -> str:
    user = session.exec(select(User).where(User.username == username)).first()
    if not user or not verify_password(password, user.hashed_password):
        raise ValueError("Incorrect username or password")
    user.status = UserStatus.online
    session.add(user)
    session.commit()
    return create_access_token(data={"sub": user.username})


def logout_user(token: str, session: Session, user: User):
    blacklist_token(token)
    user.status = UserStatus.offline
    session.add(user)
    session.commit()


def request_password_reset(session: Session, email: str):
    user = session.exec(select(User).where(User.email == email)).first()
    if not user:
        # Don't reveal whether the email exists
        return

    token = create_password_reset_token(email)
    reset_url = f"{FRONTEND_URL}/reset-password?token={token}"

    if DEV_MODE:
        print(f"\n{'='*60}")
        print(f"  PASSWORD RESET for {user.username} ({email})")
        print(f"  {reset_url}")
        print(f"{'='*60}\n")
    else:
        # TODO: send email via email service
        pass


def reset_password(session: Session, token: str, new_password: str):
    email = verify_password_reset_token(token)
    user = session.exec(select(User).where(User.email == email)).first()
    if not user:
        raise ValueError("User not found")

    user.hashed_password = get_password_hash(new_password)
    session.add(user)
    session.commit()
