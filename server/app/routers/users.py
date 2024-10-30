from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def read_users():
    return {"users": ["user1", "user2", "user3"]}
