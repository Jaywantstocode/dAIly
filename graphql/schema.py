import graphene
from user.model import UserModel
from summary.model import SummaryModel
from diary.model import DiaryModel
from user.mutations import Mutation as UserMutation
from user.query import Query as UserQuery
from diary.mutations import Mutation as DiaryMutation
from diary.query import Query as DiaryQuery
from summary.mutations import Mutation as SummaryMutation
from summary.query import Query as SummaryQuery


class Mutation(
    UserMutation,
    DiaryMutation,
    SummaryMutation
):
    pass

class Query(
    UserQuery,
    DiaryQuery,
    SummaryQuery
    
):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)