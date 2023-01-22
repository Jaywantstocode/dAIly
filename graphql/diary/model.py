from abstract.model import AbstractDocument
from datetime import date
from mongoengine.fields import (StringField, ReferenceField, DateField, ListField)


class DiaryModel(AbstractDocument):

    meta = {
        'collection': 'diary',
    }

    date = DateField(required=True, default=date.today())
    user = ReferenceField("UserModel")
    detail = StringField(required=True)
    keyevents = ListField(StringField())