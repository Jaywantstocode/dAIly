

import graphene
from abstract.mutations import AbstractMutation
from user.query import User as UserType

class UserInput():
    name = graphene.String()

class CreateDiaryMutation(AbstractMutation):
    user = graphene.Field(UserType)

    class Arguments:
        test = graphene.String()

    ok = graphene.String()

    def mutate(self, info, test):
        ok = "aaa"
        return CreateDiaryMutation(ok=ok)


class Mutation(graphene.ObjectType):
    create_diary = CreateDiaryMutation.Field()