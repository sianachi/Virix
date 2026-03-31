import pytest
from jose import jwt
from sqlmodel import select

from auth_utils import (
    SECRET_KEY,
    ALGORITHM,
    verify_password,
    create_password_reset_token,
)
from models.user import User, UserStatus
from services.auth_service import (
    register_user,
    authenticate_user,
    logout_user,
    reset_password,
)


# --- Registration ---


def test_register_user(session):
    user = register_user(session, "alice", "alice@example.com", "password123")
    assert user.id is not None
    assert user.username == "alice"
    assert user.email == "alice@example.com"
    assert verify_password("password123", user.hashed_password)


def test_register_duplicate_username(session):
    register_user(session, "alice", "alice@example.com", "password123")
    with pytest.raises(ValueError, match="Username already registered"):
        register_user(session, "alice", "other@example.com", "password123")


def test_register_duplicate_email(session):
    register_user(session, "alice", "alice@example.com", "password123")
    with pytest.raises(ValueError, match="Email already registered"):
        register_user(session, "bob", "alice@example.com", "password123")


# --- Authentication ---


def test_authenticate_user_returns_token(session, test_user):
    token = authenticate_user(session, "testuser", "password123")
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    assert payload["sub"] == "testuser"


def test_authenticate_user_sets_online(session, test_user):
    authenticate_user(session, "testuser", "password123")
    user = session.exec(select(User).where(User.username == "testuser")).first()
    assert user.status == UserStatus.online


def test_authenticate_wrong_password(session, test_user):
    with pytest.raises(ValueError, match="Incorrect username or password"):
        authenticate_user(session, "testuser", "wrongpassword")


def test_authenticate_nonexistent_user(session):
    with pytest.raises(ValueError, match="Incorrect username or password"):
        authenticate_user(session, "nobody", "password123")


# --- Logout ---


def test_logout_sets_offline(session, test_user):
    token = authenticate_user(session, "testuser", "password123")
    logout_user(token, session, test_user)

    user = session.exec(select(User).where(User.username == "testuser")).first()
    assert user.status == UserStatus.offline


# --- Password reset ---


def test_reset_password(session, test_user):
    token = create_password_reset_token("test@example.com")
    reset_password(session, token, "newpassword123")

    user = session.exec(select(User).where(User.username == "testuser")).first()
    assert verify_password("newpassword123", user.hashed_password)


def test_reset_password_invalid_token(session):
    with pytest.raises(ValueError):
        reset_password(session, "bad.token.here", "newpassword123")


def test_reset_password_unknown_email(session):
    token = create_password_reset_token("nobody@example.com")
    with pytest.raises(ValueError, match="User not found"):
        reset_password(session, token, "newpassword123")
