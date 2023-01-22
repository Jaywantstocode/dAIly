# Set up for Backend Environment

## Requirement
pyenv (https://github.com/pyenv/pyenv)


## Setup

pyenv install 3.9.12

pyenv local 3.9.12

## installing required packages
pip install -r requirements.txt


## .env file
Input username and password for MongoDB
```
username="xxx"
password="xxx"
```

## run graphql server locally
python3 app.py

then, access http://127.0.0.1:xxxx/graphql (xxxx is your port)
