from fastapi import APIRouter, Depends
from sqlmodel import Session
from database import get_session
from auth_utils import get_current_user
from models.user import User
from services import user_service

router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/")
def get_users(session: Session = Depends(get_session), current_user: User = Depends(get_current_user)):
    return user_service.get_all_users(session)
