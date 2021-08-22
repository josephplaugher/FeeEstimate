from flask import Flask
from flask_restful import Resource, Api
from people.people import AllPeople, PeopleByID

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'there'}

api.add_resource(HelloWorld, '/')
api.add_resource(AllPeople, '/getAllPeople')
api.add_resource(PeopleByID, '/getPersonByID/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)