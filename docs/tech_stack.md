# Technology Stack

## Backend
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/)
- **Server:** [Uvicorn](https://www.uvicorn.org/)
- **Language:** Python 3.9+

## Database
- **Database:** SQLite
- **ORM:** [SQLModel](https://sqlmodel.tiangolo.com/) (Combines SQLAlchemy and Pydantic for FastAPI)
- **Relationship Pattern:** `back_populates`
    - Used to synchronize both sides of a relationship in Python code.
    - Ensures that when one side of a relationship is updated (e.g., adding a room to a user), the other side is automatically updated in memory (e.g., the room's creator attribute).
    - Provides explicit and readable relationship mapping on both models.

## Real-time Communication
- **Signaling:** WebSockets (FastAPI built-in)
- **Protocol:** WebRTC (Peer-to-Peer video/audio)
