from mongoengine import Document
from datetime import datetime
from mongoengine import signals
from mongoengine.fields import (
    DateTimeField
)

def update(sender, document):
    if document.created_ts is None:
        document.created_ts = datetime.now()
    document.updated_ts = datetime.now()

class AbstractDocument(Document):
    meta = {'allow_inheritance': True, 'abstract': True, 'strict': False, 'indexes': ['-updated_ts'] }

    created_ts = DateTimeField(required=True)
    updated_ts = DateTimeField(required=True)

signals.pre_save.connect(update)
