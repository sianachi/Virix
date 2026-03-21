from fastapi import FastAPI
from contextlib import asynccontextmanager
from endpoints import user, chat, auth
from database import create_db_and_tables

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create tables on startup
    create_db_and_tables()
    yield

app = FastAPI(lifespan=lifespan)

# Include Routers
app.include_router(auth.router)
app.include_router(user.router)
app.include_router(chat.router)

@app.get("/")
async def root():
    return {"message": "Welcome to the Video Chat App API"}
