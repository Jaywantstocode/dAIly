import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineObjectType
from graphql_relay import from_global_id
from user.model import UserModel

class User(MongoengineObjectType):
    
    class Meta:
        model = UserModel
        interfaces = (Node, )


class Query(graphene.ObjectType):
    user = graphene.Field(User, id=graphene.ID())
    def resolve_user(root, info, id):
        user = UserModel.objects.get(pk=from_global_id(id)[1])
        return user
        
    