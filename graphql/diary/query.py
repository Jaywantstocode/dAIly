import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineObjectType, MongoengineConnectionField
from graphql_relay import from_global_id
from diary.model import DiaryModel
from user.model import UserModel
from mongoengine.queryset.visitor import Q


class Diary(MongoengineObjectType):
    
    class Meta:
        model = DiaryModel
        interfaces = (Node, )
        
        
        
class Query(graphene.ObjectType):
    diary = graphene.Field(Diary, id=graphene.ID())
    def resolve_diary(root, info, id):
        diary = DiaryModel.objects.get(pk=from_global_id(id)[1])
        return diary
        
    diaries = MongoengineConnectionField(Diary, start_date = graphene.Date(), end_date = graphene.Date())
    def resolve_diaries(root, info, id=graphene.ID(), start_date = graphene.Date(), end_date = graphene.Date(), **kwargs):
        user = UserModel.objects.get(pk=from_global_id(id)[1])
        diaries = DiaryModel.objects(Q(user=user) & Q(date__gte=start_date) & Q(date__lte=end_date))
        return diaries
        