from abstract.model import AbstractDocument
from mongoengine.fields import (StringField, ReferenceField)

class SummaryModel(AbstractDocument):

    meta = {
        'collection': 'summary',
    }

    user = ReferenceField("UserModel")
    name = StringField(required=True)
    email = StringField()
    