import graphene
from abstract.mutations import AbstractMutation
from diary.query import Diary as DiaryType
from diary.model import DiaryModel
from user.model import UserModel
from graphql_relay import from_global_id
from utils import insert_diary_entry
from dotenv import load_dotenv

import json, os

import cohere 

load_dotenv()

COHERE_API = os.getenv('COHERE_API')

class DiaryInput(graphene.InputObjectType):
    date = graphene.Date()
    detail = graphene.String()

class CreateDiaryMutation(AbstractMutation):
    diary = graphene.Field(DiaryType)

    class Arguments:
        input = DiaryInput()
        user_id = graphene.ID()

    def mutate(self, info, input = None, user_id=None):
        user = UserModel.objects.get(pk=from_global_id(user_id)[1])
        diary = DiaryModel(
            date=input.date,
            body="",
            user=user,
            key_events=[]
        )
        diary.save()
        return CreateDiaryMutation(diary=diary)

class UpdateDiaryMutation(AbstractMutation):
    diary = graphene.Field(DiaryType)
    
    class Arguments:
        input = DiaryInput()
        diary_id = graphene.ID()

    def mutate(self, info, input = None, diary_id = None):
        prompt = insert_diary_entry(input.detail)
        co = cohere.Client(COHERE_API) 
        response = co.generate( 
            model='command-xlarge-nightly', 
            prompt=prompt,
            max_tokens=200, 
            temperature=0.5, 
            k=0, 
            p=0.75, 
            frequency_penalty=0.1, 
            presence_penalty=0.15, 
            stop_sequences=[], 
            return_likelihoods='NONE'
        )
        print(response)
        print("\n\n response " + response[0])
        try:            
            key_events = response[0].text
            # print("key event is " + key_events, type(key_events))
            key_events = json.loads(key_events)
            print(key_events, key_events["Key events"])
            # key_events = json.loads(response[0])
        except json.JSONDecodeError:
            key_events = { "Key events": []}
        diary = DiaryModel.objects.get(pk=from_global_id(diary_id)[1])
        diary.update(body=input.detail, key_events=key_events["Key events"])
        diary.reload()
        return UpdateDiaryMutation(diary=diary)

class Mutation(graphene.ObjectType):
    create_diary = CreateDiaryMutation.Field()
    update_diary = UpdateDiaryMutation.Field()