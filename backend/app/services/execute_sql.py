from fastapi import HTTPException
from app.database import get_db_connection

def execute_query(query: str):
    conn = get_db_connection()
    if not conn:
        raise HTTPException(status_code=500, detail="Database connection failed")

    try:
        cursor = conn.cursor(dictionary=True)
        cursor.execute(query)
        result = cursor.fetchall()
        cursor.close()
        conn.close()
        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error executing SQL: {str(e)}")
