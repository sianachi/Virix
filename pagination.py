from typing import Optional, TypeVar, Sequence
from pydantic import BaseModel
from sqlmodel import Session, select, col
from sqlalchemy import desc

T = TypeVar("T")


class CursorPage(BaseModel):
    items: list
    next_cursor: Optional[int] = None
    has_more: bool = False


def paginate_query(
    session: Session,
    model,
    *,
    cursor: Optional[int] = None,
    limit: int = 50,
    order_by_field: str = "id",
    descending: bool = True,
    filters: Optional[list] = None,
) -> CursorPage:
    """Cursor-based pagination.

    Args:
        session: DB session
        model: SQLModel class
        cursor: ID to paginate from (exclusive). None = start from latest.
        limit: Max items to return.
        order_by_field: Column name to order by.
        descending: If True, newest first.
        filters: Additional WHERE clauses.
    """
    column = getattr(model, order_by_field)
    statement = select(model)

    if filters:
        for f in filters:
            statement = statement.where(f)

    if cursor is not None:
        if descending:
            statement = statement.where(column < cursor)
        else:
            statement = statement.where(column > cursor)

    if descending:
        statement = statement.order_by(desc(column))
    else:
        statement = statement.order_by(column)

    # Fetch one extra to determine has_more
    statement = statement.limit(limit + 1)
    results = list(session.exec(statement).all())

    has_more = len(results) > limit
    items = results[:limit]

    next_cursor = None
    if has_more and items:
        next_cursor = getattr(items[-1], order_by_field)

    return CursorPage(items=items, next_cursor=next_cursor, has_more=has_more)
