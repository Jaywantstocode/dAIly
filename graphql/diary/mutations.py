import graphene
from abstract.mutations import AbstractMutation
from diary.query import Diary as DiaryType
from diary.model import DiaryModel
import cohere 

class DiaryInput(graphene.InputObjectType):
    date = graphene.Date()
    detail = graphene.String()

class CreateDiaryMutation(AbstractMutation):
    diary = graphene.Field(DiaryType)

    class Arguments:
        input = DiaryInput()

    def mutate(self, info, input = None):
        
        diary = DiaryModel(
            
        )
        return CreateDiaryMutation(diary=diary)

class UpdateDiaryMutation(AbstractMutation):
    diary = graphene.Field(DiaryType)
    
    class Arguments:
        input = DiaryInput()
        id = graphene.ID()

    def mutate(self, info, input = None):
        
        return UpdateDiaryMutation()

class Mutation(graphene.ObjectType):
    create_diary = CreateDiaryMutation.Field()
    update_diary = UpdateDiaryMutation.Field()