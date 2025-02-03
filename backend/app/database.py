import mysql.connector
from mysql.connector import Error
from app.config import DB_CONFIG

def get_db_connection():
    """Establish a database connection."""
    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        if conn.is_connected():
            return conn
    except Error as e:
        print("Error connecting to MySQL:", e)
        return None

def execute_query(query: str):
    """Executes a given SQL query and returns the result."""
    conn = get_db_connection()
    if conn is None:
        return []

    try:
        cursor = conn.cursor(dictionary=True)  # ✅ Ensures results are returned as dicts
        cursor.execute(query)
        rows = cursor.fetchall()  # Fetch all results
        conn.commit()  # Commit in case of data-modifying queries (INSERT, UPDATE, DELETE)
        return rows
    except Error as e:
        print("Error executing query:", e)
        return []
    finally:
        cursor.close()
        conn.close()
