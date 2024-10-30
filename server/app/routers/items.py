from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def read_items():
    return {"items": ["item1", "item2", "item3"]}
