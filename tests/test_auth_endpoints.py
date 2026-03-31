from auth_utils import create_access_token, create_password_reset_token


# --- Register ---


def test_register_success(client):
    response = client.post("/auth/register", json={
        "username": "newuser",
        "email": "new@example.com",
        "password": "password123",
    })
    assert response.status_code == 200
    data = response.json()
    assert data["message"] == "User registered successfully"
    assert "user_id" in data


def test_register_duplicate_username(client, test_user):
    response = client.post("/auth/register", json={
        "username": "testuser",
        "email": "other@example.com",
        "password": "password123",
    })
    assert response.status_code == 400
    assert "Username already registered" in response.json()["detail"]


def test_register_duplicate_email(client, test_user):
    response = client.post("/auth/register", json={
        "username": "otheruser",
        "email": "test@example.com",
        "password": "password123",
    })
    assert response.status_code == 400
    assert "Email already registered" in response.json()["detail"]


def test_register_invalid_email(client):
    response = client.post("/auth/register", json={
        "username": "newuser",
        "email": "not-an-email",
        "password": "password123",
    })
    assert response.status_code == 422


def test_register_short_password(client):
    response = client.post("/auth/register", json={
        "username": "newuser",
        "email": "new@example.com",
        "password": "short",
    })
    assert response.status_code == 422


# --- Login ---


def test_login_success(client, test_user):
    response = client.post("/auth/login", data={
        "username": "testuser",
        "password": "password123",
    })
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"


def test_login_wrong_password(client, test_user):
    response = client.post("/auth/login", data={
        "username": "testuser",
        "password": "wrongpassword",
    })
    assert response.status_code == 401
    assert "Incorrect username or password" in response.json()["detail"]


def test_login_nonexistent_user(client):
    response = client.post("/auth/login", data={
        "username": "nobody",
        "password": "password123",
    })
    assert response.status_code == 401


# --- Logout ---


def test_logout_success(client, auth_header):
    response = client.post("/auth/logout", headers=auth_header)
    assert response.status_code == 200
    assert response.json()["message"] == "Logged out successfully"


def test_logout_token_invalidated(client, auth_header):
    client.post("/auth/logout", headers=auth_header)
    # Token should no longer work
    response = client.post("/auth/logout", headers=auth_header)
    assert response.status_code == 401


def test_logout_no_token(client):
    response = client.post("/auth/logout")
    assert response.status_code == 401


# --- Protected routes ---


def test_protected_route_with_valid_token(client, auth_header):
    response = client.get("/users/me", headers=auth_header)
    assert response.status_code == 200
    assert response.json()["username"] == "testuser"


def test_protected_route_no_token(client):
    response = client.get("/users/me")
    assert response.status_code == 401


def test_protected_route_invalid_token(client):
    response = client.get("/users/me", headers={"Authorization": "Bearer bad.token"})
    assert response.status_code == 401


def test_protected_route_blacklisted_token(client, auth_header):
    client.post("/auth/logout", headers=auth_header)
    response = client.get("/users/me", headers=auth_header)
    assert response.status_code == 401


# --- Forgot password ---


def test_forgot_password_existing_email(client, test_user):
    response = client.post("/auth/forgot-password", json={"email": "test@example.com"})
    assert response.status_code == 200


def test_forgot_password_unknown_email(client):
    response = client.post("/auth/forgot-password", json={"email": "nobody@example.com"})
    # Should still return 200 to avoid leaking email existence
    assert response.status_code == 200


# --- Reset password ---


def test_reset_password_success(client, test_user):
    token = create_password_reset_token("test@example.com")
    response = client.post("/auth/reset-password", json={
        "token": token,
        "new_password": "newpassword123",
    })
    assert response.status_code == 200

    # Verify login works with new password
    login = client.post("/auth/login", data={
        "username": "testuser",
        "password": "newpassword123",
    })
    assert login.status_code == 200


def test_reset_password_invalid_token(client):
    response = client.post("/auth/reset-password", json={
        "token": "bad.token.here",
        "new_password": "newpassword123",
    })
    assert response.status_code == 400


def test_reset_password_short_password(client, test_user):
    token = create_password_reset_token("test@example.com")
    response = client.post("/auth/reset-password", json={
        "token": token,
        "new_password": "short",
    })
    assert response.status_code == 422


def test_reset_password_access_token_rejected(client, test_user):
    token = create_access_token(data={"sub": "test@example.com"})
    response = client.post("/auth/reset-password", json={
        "token": token,
        "new_password": "newpassword123",
    })
    assert response.status_code == 400
