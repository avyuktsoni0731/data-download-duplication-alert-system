from fastapi import APIRouter

router = APIRouter()

@router.get("/status")
async def read_admin_status():
    return {"status": "Admin access only"}
