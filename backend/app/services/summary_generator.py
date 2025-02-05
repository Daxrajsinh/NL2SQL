import pandas as pd
from openai import OpenAI
from app.config import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

def generate_summary(question: str, sql_query: str, df: pd.DataFrame) -> str:
    """
    Generates a human-readable summary based on the SQL query and result data.
    """
    # Convert dataframe to JSON-like string format for better context
    data_sample = df.head(10).to_dict(orient="records")

    # Prepare the prompt for GPT model
    prompt = f"""
    You are a data analyst. Given the following SQL query and its results, generate a short, clear, and meaningful summary.
    
    User Question: "{question}"
    Generated SQL: {sql_query}
    Query Results Sample: {data_sample}
    
    Your task is to write a concise summary in natural language.
    """

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content.strip()
