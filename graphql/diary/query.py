import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineObjectType, MongoengineConnectionField
from graphql_relay import from_global_id
from diary.model import DiaryModel

class Diary(MongoengineObjectType):
    
    class Meta:
        model = DiaryModel
        interfaces = (Node, )
        
        
        
class Query(graphene.ObjectType):
    diary = graphene.Field(Diary, id=graphene.ID())
    def resolve_diary(root, info, id):
        diary = DiaryModel.objects.get(pk=from_global_id(id)[1])
        return diary
        
    diaries = MongoengineConnectionField(Diary)
    def resolve_diaries(root, info, id=graphene.ID(), **kwargs):
        diaries = MongoengineConnectionField(Diary)
        return diaries.default_resolver(root, info, user=id, **kwargs)
        