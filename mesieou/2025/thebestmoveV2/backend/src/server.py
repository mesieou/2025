from contextlib import asynccontextmanager
from datetime import datetime
import os
import sys

from bson import ObjectId
from fastapi import FastAPI, status
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
import uvicorn

from dal import ContactDAL, ContactForm

COLLECTION_NAME = "contact_f"
MONGODB_URI = os.environ["MONGODB_URI"]
DEBUG = os.environ.get("DEBUG", "").strip().lower() in {"1", "true", "on", "yes"}


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup:
    client = AsyncIOMotorClient(MONGODB_URI)
    database = client.get_default_database()

    # Ensure the database is available:
    pong = await database.command("ping")
    if int(pong["ok"]) != 1:
        raise Exception("Cluster connection is not okay!")

    contact_f = database.get_collection(COLLECTION_NAME)
    app.contact_dal = ContactDAL(contact_f)

    # Yield back to FastAPI Application:
    yield

    # Shutdown:
    client.close()


app = FastAPI(lifespan=lifespan, debug=DEBUG)


@app.get("/api/contacts")
async def get_all_contacts() -> list[ContactForm]:
    return [i async for i in app.contact_dal.list_contact_forms()]


class NewContact(BaseModel):
    name: str
    email: str
    phone: str
    message: str


class NewContactResponse(BaseModel):
    id: str
    name: str


@app.post("/api/contacts", status_code=status.HTTP_201_CREATED)
async def create_contact(new_contact: NewContact) -> NewContactResponse:
    return NewContactResponse(
        id=await app.contact_dal.create_contact_form(
            new_contact.name, new_contact.email, new_contact.phone, new_contact.message
        ),
        name=new_contact.name,
    )


@app.get("/api/contacts/{contact_id}")
async def get_contact(contact_id: str) -> ContactForm:
    return await app.contact_dal.get_contact_form(contact_id)


@app.delete("/api/contacts/{contact_id}")
async def delete_contact(contact_id: str) -> bool:
    return await app.contact_dal.delete_contact_form(contact_id)


class DummyResponse(BaseModel):
    id: str
    when: datetime


@app.get("/api/dummy")
async def get_dummy() -> DummyResponse:
    return DummyResponse(
        id=str(ObjectId()),
        when=datetime.now(),
    )


def main(argv=sys.argv[1:]):
    try:
        uvicorn.run("server:app", host="0.0.0.0", port=3001, reload=DEBUG)
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
