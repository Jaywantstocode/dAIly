from flask import Flask
from flask_mongoengine import MongoEngine
from flask_graphql import GraphQLView
from mongoengine import connect

from schema import schema

db = MongoEngine()
app = Flask(__name__)

app.config["MONGODB_SETTINGS"] = [
    {
        "db": "project1",
        "host": "localhost",
        "port": 27017,
        "alias": "default",
    }
]
db.init_app(app)

app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
    'graphql',
    schema=schema,
    graphiql=True,
))


if __name__ == '__main__':
    app.run()
    

