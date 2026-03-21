from sqlmodel import Session, select
from models.user import User
from auth_utils import get_password_hash, verify_password, create_access_token, blacklist_token


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
    return create_access_token(data={"sub": user.username})


def logout_user(token: str):
    blacklist_token(token)
