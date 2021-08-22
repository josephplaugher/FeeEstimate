from dotenv import load_dotenv
import psycopg2
import psycopg2.extras

def dbconn():
    try:
        print('connecting to the database...')
        conn = psycopg2.connect(database="fee_estimate", user="postgres", password="Edison1985!", host="127.0.0.1", port="5432" )
        RunQuery = conn.cursor(cursor_factory = psycopg2.extras.RealDictCursor)
        return RunQuery
    except:
        print('database connection error ')