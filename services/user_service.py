from typing import List
from sqlmodel import Session, select
from models.user import User


def get_all_users(session: Session) -> List[User]:
    return session.exec(select(User)).all()
