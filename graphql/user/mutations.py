import graphene
from abstract.mutations import AbstractMutation
from user.query import User as UserType

class UserInput():
    name = graphene.String()
    email = graphene.String()

class CreateUserMutation(AbstractMutation):
    user = graphene.Field(UserType)

    class Arguments:
        test = graphene.String()

    ok = graphene.String()

    def mutate(self, info, test):
        ok = "aaa"
        return CreateUserMutation(ok=ok)

# class UserLoginMutation(AbstractMutation):
#     pass

class Mutation(graphene.ObjectType):
    create_user = CreateUserMutation.Field()
    