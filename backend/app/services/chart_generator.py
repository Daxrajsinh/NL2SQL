import json
import re
import decimal
import pandas as pd
from openai import OpenAI

client = OpenAI()

def decimal_to_float(obj):
    if isinstance(obj, decimal.Decimal):
        return float(obj)
    raise TypeError(f"Type {type(obj)} not serializable")

def suggest_chart(question: str, df: pd.DataFrame):
    """
    This function sends the data and question to GPT-4 and lets it decide the best chart for the query.
    """

    # If there's no data, return a default response
    if df.empty:
        print("⚠️ No data available, returning default response.")
        return None, {}, {}

    # Convert dataframe to JSON-like format
    data_sample = df.head(10).to_dict(orient="records")
    data_sample = json.loads(json.dumps(data_sample, default=decimal_to_float))

    # Prepare messages for GPT-4
    messages = [
        {"role": "system", "content": "You are a data visualization expert."},
        {"role": "user", "content": f"""
        Given the following SQL query result, suggest the best chart type for visualizing this data.

        **User Question:** "{question}"
        **Query Result Sample (First 10 Rows):**
        ```json
        {json.dumps(data_sample, indent=2)}
        ```

        **Task:** 
        - Determine the most suitable chart type for this data from ["Bar", "Pie", "Line", "Area", "Scatter", "Heatmap"].
        - Return `selected_columns` containing `"x_axis"` and `"y_axis"` keys.
        - Ensure output is formatted as JSON.

        **Return output in this exact format:**
        ```json
        {{
            "best_chart": "Line",
            "selected_columns": {{
                "x_axis": "order_month",
                "y_axis": "total_quantity"
            }},
            "other_settings": {{
                "color_scheme": "different for each product",
                "type": "monotone",
                "legend": "product_name"
            }}
        }}
        ```
        """}
    ]

    # Send request to GPT-4
    response = client.chat.completions.create(
        model="gpt-4",
        messages=messages,
        max_tokens=1000,
        temperature=0.7
    )

    # Extract response text
    response_text = response.choices[0].message.content
    print(f"🔍 GPT-4 Raw Response: {response_text}")  # Debugging step

    # Check if the response is empty or invalid
    if not response_text.strip():
        print("❌ GPT-4 response is empty or invalid.")
        return None, {}, {}

    # Try parsing as JSON
    try:
        result = json.loads(response_text.strip())
        best_chart = result.get("best_chart")
        selected_columns = result.get("selected_columns", {})
        other_settings = result.get("other_settings", {})

        # Ensure values are valid before returning
        if not best_chart or not selected_columns:
            print("⚠️ GPT-4 did not return valid chart recommendations.")
            return None, {}, {}

        return best_chart, selected_columns, other_settings

    except json.JSONDecodeError as e:
        print(f"❌ Error parsing LLM response as JSON: {e}")
        return None, {}, {}
