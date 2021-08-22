import sys
from flask_restful import Resource
sys.path.append('../api')
from dbconn import dbconn
from dotenv import load_dotenv, dotenv_values
import json

class AllPeople(Resource):
    def get(self):
        print('get all people')
        return {'people': "all"}

    def post(self, personData):
        print('adding person')
        return {'person': 'addeed'}

class PeopleByID(Resource):
    def get(self, id):
        print('get person by id')
        load_dotenv()
        # conn = psycopg2.connect(database="fee_estimate", user="postgres", password="Edison1985!", host="127.0.0.1", port="5432" )
        # Connection = conn.cursor()
        Connection = dbconn()
        Connection.execute('SELECT name, billrate::float, rawrate::float, billtitle FROM people WHERE project_number=10000000')
        person = Connection.fetchone()
        print(person)
        return person