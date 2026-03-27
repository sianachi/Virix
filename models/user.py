from typing import Optional, List, TYPE_CHECKING
from enum import Enum
from sqlmodel import SQLModel, Field, Relationship, Column
from sqlalchemy import Enum as SAEnum
from datetime import datetime

if TYPE_CHECKING:
    from .room import Room
    from .message import Message


class UserStatus(str, Enum):
    online = "online"
    idle = "idle"
    dnd = "dnd"
    offline = "offline"


class UserPublic(SQLModel):
    id: int
    username: str
    email: str
    status: UserStatus
    emoji: Optional[str] = None
    color: Optional[str] = None
    activity: Optional[str] = None
    created_at: datetime


class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(index=True, unique=True)
    email: str = Field(unique=True)
    hashed_password: str
    status: UserStatus = Field(
        default=UserStatus.offline,
        sa_column=Column(SAEnum(UserStatus), nullable=False, default=UserStatus.offline),
    )
    emoji: Optional[str] = Field(default=None)
    color: Optional[str] = Field(default=None)
    activity: Optional[str] = Field(default=None)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    # Relationships
    created_rooms: List["Room"] = Relationship(back_populates="creator")
    messages: List["Message"] = Relationship(back_populates="sender")
