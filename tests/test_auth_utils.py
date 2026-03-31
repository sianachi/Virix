from datetime import timedelta

from jose import jwt

from auth_utils import (
    verify_password,
    get_password_hash,
    create_access_token,
    create_password_reset_token,
    verify_password_reset_token,
    blacklist_token,
    _token_blacklist,
    SECRET_KEY,
    ALGORITHM,
)


# --- Password hashing ---


def test_hash_and_verify():
    hashed = get_password_hash("mypassword")
    assert hashed != "mypassword"
    assert verify_password("mypassword", hashed)


def test_wrong_password_fails():
    hashed = get_password_hash("mypassword")
    assert not verify_password("wrongpassword", hashed)


def test_password_truncated_to_72_chars():
    long_pw = "a" * 100
    hashed = get_password_hash(long_pw)
    # Anything sharing the first 72 chars should verify the same
    assert verify_password(long_pw, hashed)
    assert verify_password("a" * 72, hashed)


# --- Access tokens ---


def test_create_access_token_contains_sub():
    token = create_access_token(data={"sub": "alice"})
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    assert payload["sub"] == "alice"
    assert "exp" in payload
    assert "jti" in payload


def test_create_access_token_custom_expiry():
    token = create_access_token(data={"sub": "alice"}, expires_delta=timedelta(minutes=5))
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    assert payload["sub"] == "alice"


# --- Token blacklist ---


def test_blacklist_token():
    token = create_access_token(data={"sub": "alice"})
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    jti = payload["jti"]

    assert jti not in _token_blacklist
    blacklist_token(token)
    assert jti in _token_blacklist


# --- Password reset tokens ---


def test_create_and_verify_reset_token():
    token = create_password_reset_token("alice@example.com")
    email = verify_password_reset_token(token)
    assert email == "alice@example.com"


def test_reset_token_rejects_access_token():
    token = create_access_token(data={"sub": "alice@example.com"})
    try:
        verify_password_reset_token(token)
        assert False, "Should have raised ValueError"
    except ValueError:
        pass


def test_reset_token_rejects_tampered_token():
    try:
        verify_password_reset_token("not.a.valid.token")
        assert False, "Should have raised ValueError"
    except ValueError:
        pass
