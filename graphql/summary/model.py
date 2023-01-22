from abstract.model import AbstractDocument
from mongoengine.fields import (StringField, ReferenceField, DateField)

class SummaryModel(AbstractDocument):

    meta = {
        'collection': 'summary',
    }

    user = ReferenceField("UserModel", required=True)
    body = StringField()
    start_date = DateField()
    end_date = DateField()
    
    