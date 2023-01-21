import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineObjectType
from user.model import UserModel

class User(MongoengineObjectType):
    
    class Meta:
        model = UserModel
        interfaces = (Node, )


class Query(graphene.ObjectType):
    users = graphene.Field(User)
    def resolve_users():
        pass
    