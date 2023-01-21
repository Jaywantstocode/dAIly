from abstract.model import AbstractDocument
from mongoengine.fields import (StringField)
class UserModel(AbstractDocument):

    meta = {
        'collection': 'user',
    }

    name = StringField(required=True)
    email = StringField()
    