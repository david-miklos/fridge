from fastapi import APIRouter

from app.api.routes import families, lists, login, ping, tasks, users

api_router = APIRouter()
api_router.include_router(ping.router, prefix="/ping", tags=["ping"])
api_router.include_router(login.router, tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(families.router, prefix="/families", tags=["families"])
api_router.include_router(tasks.router, prefix="/tasks", tags=["tasks"])
api_router.include_router(lists.router, prefix="/lists", tags=["lists"])
