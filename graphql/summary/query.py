import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineObjectType, MongoengineConnectionField
from graphql_relay import from_global_id
from summary.model import SummaryModel

class Summary(MongoengineObjectType):
    
    class Meta:
        model = SummaryModel
        interfaces = (Node, )
        

    
class Query(graphene.ObjectType):
    summary = graphene.Field(Summary, id=graphene.ID())
    def resolve_user(root, info, id):
        summary = SummaryModel.objects.get(pk=from_global_id(id)[1])
        # if user.is_deleted is True:
        #     return GraphQLError('This quest has already been deleted.')
        return summary

    summaries = MongoengineConnectionField(Summary)
    def resolve_diaries(root, info, id=graphene.ID(), **kwargs):
        summaries = MongoengineConnectionField(Summary)
        return summaries.default_resolver(root, info, user=id, **kwargs)
