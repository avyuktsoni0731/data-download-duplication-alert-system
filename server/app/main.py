from fastapi import FastAPI
from app.routers import items, users
from app.internal import admin

app = FastAPI()

#sample
app.include_router(items.router, prefix="/items", tags=["Items"])
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(admin.router, prefix="/admin", tags=["Admin"])
