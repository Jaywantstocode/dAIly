import graphene
from abstract.mutations import AbstractMutation
from summary.query import Summary as SummaryType
from summary.model import SummaryModel
import cohere 

class SummaryInput(graphene.InputObjectType):
    date = graphene.String()
    detail = graphene.String()

class CreateSummaryMutation(AbstractMutation):
    summary = graphene.Field(SummaryType)

    class Arguments:
        input = SummaryInput()

    def mutate(self, info, input = None):
        
        summary = SummaryModel(
            
        )
        return CreateSummaryMutation(summary=summary)

class UpdateSummaryMutation(AbstractMutation):
    summary = graphene.Field(SummaryType)
    
    class Arguments:
        input = SummaryInput()
        id = graphene.ID()

    def mutate(self, info, input = None):
        
        return UpdateSummaryMutation()

class Mutation(graphene.ObjectType):
    create_summary = CreateSummaryMutation.Field()
    update_summary = UpdateSummaryMutation.Field()