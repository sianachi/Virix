import os
from fastapi import APIRouter, Depends, HTTPException, Request, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlmodel import Session
import re
from pydantic import BaseModel, field_validator
from dotenv import load_dotenv
from slowapi import Limiter
from slowapi.util import get_remote_address
from database import get_session
from auth_utils import oauth2_scheme, get_current_user
from models.user import User
from services import auth_service

load_dotenv()

limiter = Limiter(key_func=get_remote_address)
RATE_LIMIT_AUTH = os.getenv("RATE_LIMIT_AUTH", "5/minute")

router = APIRouter(prefix="/auth", tags=["Authentication"])


class UserRegister(BaseModel):
    username: str
    email: str
    password: str

    @field_validator("email")
    @classmethod
    def valid_email(cls, v: str) -> str:
        if not re.match(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", v):
            raise ValueError("Invalid email address")
        return v

    @field_validator("password")
    @classmethod
    def password_min_length(cls, v: str) -> str:
        if len(v) < 8:
            raise ValueError("Password must be at least 8 characters")
        return v


@router.post("/register")
@limiter.limit(RATE_LIMIT_AUTH)
def register(request: Request, user_data: UserRegister, session: Session = Depends(get_session)):
    try:
        user = auth_service.register_user(session, user_data.username, user_data.email, user_data.password)
        return {"message": "User registered successfully", "user_id": user.id}
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


@router.post("/login")
@limiter.limit(RATE_LIMIT_AUTH)
def login(request: Request, form_data: OAuth2PasswordRequestForm = Depends(), session: Session = Depends(get_session)):
    try:
        token = auth_service.authenticate_user(session, form_data.username, form_data.password)
        return {"access_token": token, "token_type": "bearer"}
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )


@router.post("/logout")
def logout(
    token: str = Depends(oauth2_scheme),
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
):
    auth_service.logout_user(token, session, current_user)
    return {"message": "Logged out successfully"}


class ForgotPasswordRequest(BaseModel):
    email: str


class ResetPasswordRequest(BaseModel):
    token: str
    new_password: str

    @field_validator("new_password")
    @classmethod
    def password_min_length(cls, v: str) -> str:
        if len(v) < 8:
            raise ValueError("Password must be at least 8 characters")
        return v


@router.post("/forgot-password")
@limiter.limit(RATE_LIMIT_AUTH)
def forgot_password(request: Request, body: ForgotPasswordRequest, session: Session = Depends(get_session)):
    auth_service.request_password_reset(session, body.email)
    # Always return success to avoid revealing whether the email exists
    return {"message": "If that email is registered, a recovery link has been sent"}


@router.post("/reset-password")
@limiter.limit(RATE_LIMIT_AUTH)
def reset_password(request: Request, body: ResetPasswordRequest, session: Session = Depends(get_session)):
    try:
        auth_service.reset_password(session, body.token, body.new_password)
        return {"message": "Password reset successfully"}
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
