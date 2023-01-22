import graphene

class AbstractMutation(graphene.Mutation):
    class Meta:
        abstract = True