import sys
from flask_restful import Resource, reqparse
parser = reqparse.RequestParser()
sys.path.append('../api')
from dbconn import dbconn
import json

class GetPeopleByProject(Resource):
    def get(self, projectnumber):
        Connection = dbconn()
        Connection.execute('SELECT id::int,name, billrate::float, rawrate::float, billtitle FROM people WHERE project_number=%s',[projectnumber])
        person = Connection.fetchall()
        return person, 200

class UpdatePerson(Resource):
    print('updating person')
    def post(self, projectnumber,id):
        parser.add_argument('name', type=str)
        parser.add_argument('billrate', type=str)
        parser.add_argument('rawrate', type=str)
        parser.add_argument('billtitle', type=str)
        body = parser.parse_args()
        try:
            Connection = dbconn()
            Connection.execute('UPDATE people SET (name, billrate, rawrate, billtitle) = (%s,%s,%s,%s) WHERE project_number=%s AND id=%s',[body.name, body.billrate, body.rawrate, body.billtitle, projectnumber, id])
            Connection.close() 
            return 'updated', 200
        except Exception as exc:
            print("Error executing SQL: %s"%exc)
            return 'error posting data: %s'%exc
        