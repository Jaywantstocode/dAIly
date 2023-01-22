from abstract.model import AbstractDocument
from mongoengine.fields import (StringField, EmailField)
class UserModel(AbstractDocument):

    meta = {
        'collection': 'user',
    }

    name = StringField(required=True)
    email = EmailField(required=True)