from abstract.model import AbstractDocument
from datetime import date
from mongoengine.fields import (StringField, ReferenceField, DateField, ListField)


class DiaryModel(AbstractDocument):

    meta = {
        'collection': 'diary',
        'indexes' : [
            'date'
        ]
    }

    date = DateField(required=True, default=date.today())
    user = ReferenceField("UserModel")
    body = StringField(required=True)
    key_events = ListField(StringField())
    # TODO: images