from flask import Flask
from flask_mongoengine import MongoEngine
from flask_graphql import GraphQLView
from mongoengine import connect
from flask_cors import CORS
import os
from dotenv import load_dotenv

from schema import schema

app = Flask(__name__)
CORS(app)
load_dotenv()

username = os.getenv('username')
password = os.getenv('password')
print(username, password)
connect(
    'hackshack',
    username=username,
    password=password,
    host=f'mongodb+srv://{username}:{password}@cluster0.w3l8hcs.mongodb.net/?retryWrites=true&w=majority',
)

app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
    'graphql',
    schema=schema,
    graphiql=True,
))


if __name__ == '__main__':
    with app.app_context():
        app.run()
    

