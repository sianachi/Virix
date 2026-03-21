from typing import Optional, List, TYPE_CHECKING
from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime

if TYPE_CHECKING:
    from .user import User
    from .message import Message

class RoomMember(SQLModel, table=True):
    room_id: Optional[int] = Field(default=None, foreign_key="room.id", primary_key=True)
    user_id: Optional[int] = Field(default=None, foreign_key="user.id", primary_key=True)
    joined_at: datetime = Field(default_factory=datetime.utcnow)

class Room(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    creator_id: int = Field(foreign_key="user.id")
    is_private: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    # Relationships
    creator: "User" = Relationship(back_populates="created_rooms")
    messages: List["Message"] = Relationship(back_populates="room")
