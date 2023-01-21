import graphene
from user.model import UserModel
from user.mutations import Mutation as UserMutation
from user.query import Query as UserQuery

class Mutation(
    UserMutation
):
    pass

class Query(
    UserQuery
):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)