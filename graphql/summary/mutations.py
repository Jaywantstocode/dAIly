import graphene
from abstract.mutations import AbstractMutation
from diary.model import DiaryModel
from summary.query import Summary as SummaryType
from summary.model import SummaryModel
from user.model import UserModel
from graphql_relay import from_global_id
from mongoengine.queryset.visitor import Q
from utils import summarize
from dotenv import load_dotenv

import json, os

import cohere 

load_dotenv()

COHERE_API = os.getenv('COHERE_API')



class SummaryInput(graphene.InputObjectType):
    start_date = graphene.Date()
    end_date = graphene.Date()

class CreateSummaryMutation(AbstractMutation):
    summary = graphene.Field(SummaryType)

    class Arguments:
        input = SummaryInput()
        user_id = graphene.ID()

    def mutate(self, info, input = None, user_id = None):
        user = UserModel.objects.get(pk=from_global_id(user_id)[1])
        diaries = DiaryModel.objects(Q(user=user) & Q(date__gte=input.start_date) & Q(date__lte=input.end_date))
        
        out_str = ""
        for diary in diaries:
            if diary.key_events == []:
                continue
            print(diary.date, diary.key_events)
            out_str = out_str + str(diary.date) + "\n" + str(diaries) + "\n\n"
        
        prompt = summarize(out_str)
        co = cohere.Client(COHERE_API) 
        response = co.generate( 
            model='command-xlarge-nightly', 
            prompt=prompt,
            max_tokens=300, 
            temperature=0.5, 
            k=0, 
            p=0.75, 
            frequency_penalty=0.2, 
            presence_penalty=0.15, 
            stop_sequences=[], 
            return_likelihoods='NONE'
        )
        summary = SummaryModel(
            user=user,
            start_date=input.start_date,
            end_date=input.end_date,
            body=response[0].text
        )
        summary.save()
        return CreateSummaryMutation(summary=summary)

# class UpdateSummaryMutation(AbstractMutation):
#     summary = graphene.Field(SummaryType)
    
#     class Arguments:
#         input = SummaryInput()
#         id = graphene.ID()

#     def mutate(self, info, input = None):
        
#         return UpdateSummaryMutation()

class Mutation(graphene.ObjectType):
    create_summary = CreateSummaryMutation.Field()
    # update_summary = UpdateSummaryMutation.Field()