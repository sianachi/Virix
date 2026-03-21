from typing import List
from sqlmodel import Session, select
from models.room import Room, RoomMember


def list_rooms(session: Session) -> List[Room]:
    return session.exec(select(Room)).all()


def create_room(session: Session, name: str, creator_id: int, is_private: bool = False) -> Room:
    room = Room(name=name, creator_id=creator_id, is_private=is_private)
    session.add(room)
    session.commit()
    session.refresh(room)
    return room


def join_room(session: Session, room_id: int, user_id: int) -> RoomMember:
    if not session.get(Room, room_id):
        raise ValueError("Room not found")

    existing = session.exec(
        select(RoomMember).where(RoomMember.room_id == room_id, RoomMember.user_id == user_id)
    ).first()
    if existing:
        raise ValueError("Already a member of this room")

    member = RoomMember(room_id=room_id, user_id=user_id)
    session.add(member)
    session.commit()
    session.refresh(member)
    return member
