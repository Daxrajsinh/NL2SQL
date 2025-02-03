from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import pandas as pd
import decimal
import json
import datetime
from app.services.query_generator import generate_sql
from app.database import execute_query
from app.services.chart_generator import suggest_chart  # ✅ Using predefined rules again
from app.services.summary_generator import generate_summary
from app.services.chart_generator import decimal_to_float

router = APIRouter()

class QueryRequest(BaseModel):
    question: str

# ✅ Convert Decimal & Date values to JSON-serializable format
def decimal_to_serializable(obj):
    if isinstance(obj, decimal.Decimal):
        return float(obj)
    if isinstance(obj, datetime.date):
        return obj.strftime("%Y-%m-%d")  # Convert date to string
    raise TypeError(f"Type {type(obj)} not serializable")

@router.post("/generate_sql/")
async def generate_sql_endpoint(query_request: QueryRequest):
    question = query_request.question

    # Generate SQL Query
    sql_query = generate_sql(question)
    if not sql_query:
        raise HTTPException(status_code=500, detail="SQL query generation failed.")

    # Execute SQL Query
    result_data = execute_query(sql_query)
    if not result_data or len(result_data) == 0:
        return {
            "generated_sql": sql_query,
            "data": [],
            "best_chart": None,
            "selected_columns": {},
            "summary": "No data available for this query."
        }

    # Convert decimal values
    result_data = json.loads(json.dumps(result_data, default=decimal_to_float))
    df = pd.DataFrame(result_data)

    # Get chart recommendations
    best_chart, selected_columns, other_settings = suggest_chart(question, df)

    # Generate Summary
    summary = generate_summary(question, sql_query, df)

    return {
        "generated_sql": sql_query,
        "data": result_data,
        "best_chart": best_chart,
        "selected_columns": selected_columns,  # ✅ Now properly included
        "summary": summary
    }

