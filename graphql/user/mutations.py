import graphene
from abstract.mutations import AbstractMutation
from user.query import User as UserType

class CreateUserMutation(AbstractMutation):
    user = graphene.Field(UserType)

    class Arguments:
        test = graphene.String()

    ok = graphene.Boolean()

    def mutate(self, info, test):
        ok = "aaa"
        return CreateUserMutation(ok=ok)


class Mutation(graphene.ObjectType):
    create_user = CreateUserMutation.Field()