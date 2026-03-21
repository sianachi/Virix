from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlmodel import Session
from database import get_session
from auth_utils import get_current_user
from models.user import User
from services import chat_service

router = APIRouter(prefix="/chat", tags=["Chat"])


class RoomCreate(BaseModel):
    name: str
    is_private: bool = False


@router.get("/rooms")
def list_rooms(session: Session = Depends(get_session), current_user: User = Depends(get_current_user)):
    return chat_service.list_rooms(session)


@router.post("/rooms")
def create_room(room_data: RoomCreate, session: Session = Depends(get_session), current_user: User = Depends(get_current_user)):
    return chat_service.create_room(session, room_data.name, current_user.id, room_data.is_private)


@router.post("/rooms/{room_id}/join")
def join_room(room_id: int, session: Session = Depends(get_session), current_user: User = Depends(get_current_user)):
    try:
        chat_service.join_room(session, room_id, current_user.id)
        return {"message": f"Joined room {room_id}"}
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
