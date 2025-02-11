from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorCollection
from pymongo import ReturnDocument
from typing import Optional

from pydantic import BaseModel

from uuid import uuid4

#difine the structure of the contact form submission
class ContactForm(BaseModel):
  id: str
  name: str
  email: str
  phone: str
  message: str
  item_count: int

  # Convert MongoDB doc to Pydantic model
  @staticmethod
  def from_doc(doc) -> "ContactForm":
      return ContactForm(
          id=str(doc["_id"]),
          name=doc["name"],
          email=doc["email"],
          phone=doc["phone"],
          message=doc["message"],
          item_count=doc["item_count"],
      )

class ContactDAL:
    def __init__(self, contact_collection: AsyncIOMotorCollection):
        self._contact_collection = contact_collection

    async def list_contact_forms(self, session=None):
        # Retrieve all contact forms from the collection
        async for doc in self._contact_collection.find({}, session=session):
            yield ContactForm.from_doc(doc)  # Convert MongoDB doc to ContactForm model

    async def create_contact_form(self, name: str, email: str, phone: str, message: str) -> str:
        # Insert a new contact form into the collection
        response = await self._contact_collection.insert_one(
            {"name": name, "email": email, "phone": phone, "message": message, "item_count": 1}        
        )
        return str(response.inserted_id)

    async def get_contact_form(self, id: str | ObjectId, session=None) -> Optional[ContactForm]:
        # Retrieve a specific contact form by its ID
        doc = await self._contact_collection.find_one(
            {"_id": ObjectId(id)},
            session=session,
        )
        if doc:
            return ContactForm.from_doc(doc)  # Return ContactForm model if found

    async def delete_contact_form(self, id: str | ObjectId, session=None) -> bool:
        # Delete a specific contact form by its ID
        response = await self._contact_collection.delete_one(
            {"_id": ObjectId(id)},
            session=session,
        )
        return response.deleted_count == 1  # Return True if successfully deleted