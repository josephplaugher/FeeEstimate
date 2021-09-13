from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
from people.people import GetPeopleByProject, UpdatePerson

app = Flask(__name__)
cors = CORS(app)
api = Api(app)

class Generally(Resource):
    def get(self):
        return 'not a valid endpoint'

api.add_resource(Generally, '/')
api.add_resource(GetPeopleByProject, '/getPeopleByProject/<int:projectnumber>')
api.add_resource(UpdatePerson, '/updatePerson/project/<int:projectnumber>/person/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)