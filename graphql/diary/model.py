from abstract.model import AbstractDocument
from mongoengine.fields import (StringField)


class DiaryModel(AbstractDocument):

    meta = {
        'collection': 'diary',
    }

    title = StringField(required=True)
    detail = StringField(required=True)
    keywords = ReferenceField()