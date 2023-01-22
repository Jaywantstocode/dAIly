import graphene
from abstract.mutations import AbstractMutation
from user.query import User as UserType
from user.model import UserModel

class UserInput(graphene.InputObjectType):
    name = graphene.String()
    email = graphene.String()

class CreateUserMutation(AbstractMutation):
    user = graphene.Field(UserType)

    class Arguments:
        input = UserInput()

    def mutate(self, info, input = None):
        user = UserModel(
            name=input.name,
            email=input.email
        )
        user.save()
        return CreateUserMutation(user=user)

# class UserLoginMutation(AbstractMutation):
    
#     def mutate():
#         pass

class Mutation(graphene.ObjectType):
    create_user = CreateUserMutation.Field()
    # user_login = UserLoginMutation.Field()
    