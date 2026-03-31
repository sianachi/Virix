import pytest
from sqlalchemy.pool import StaticPool
from sqlmodel import SQLModel, Session, create_engine
from fastapi.testclient import TestClient

from main import app
from database import get_session
from endpoints.auth import limiter as auth_limiter
from auth_utils import _token_blacklist, get_password_hash


@pytest.fixture(name="engine")
def engine_fixture():
    engine = create_engine(
        "sqlite://",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
    SQLModel.metadata.create_all(engine)
    yield engine
    SQLModel.metadata.drop_all(engine)


@pytest.fixture(name="session")
def session_fixture(engine):
    with Session(engine, expire_on_commit=False) as session:
        yield session


@pytest.fixture(name="client")
def client_fixture(engine):
    def get_session_override():
        with Session(engine, expire_on_commit=False) as session:
            yield session

    app.dependency_overrides[get_session] = get_session_override
    with TestClient(app) as client:
        yield client
    app.dependency_overrides.clear()


@pytest.fixture(autouse=True)
def reset_test_state():
    _token_blacklist.clear()
    auth_limiter._storage.reset()
    yield
    _token_blacklist.clear()


@pytest.fixture(name="test_user")
def test_user_fixture(session):
    from models.user import User

    user = User(
        username="testuser",
        email="test@example.com",
        hashed_password=get_password_hash("password123"),
    )
    session.add(user)
    session.commit()
    session.refresh(user)
    return user


@pytest.fixture(name="auth_header")
def auth_header_fixture(client, test_user):
    response = client.post(
        "/auth/login",
        data={"username": "testuser", "password": "password123"},
    )
    token = response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}
