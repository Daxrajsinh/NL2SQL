import re
from openai import OpenAI
from app.config import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

SCHEMA_DESCRIPTION = """
Tables:
- customers(customer_id, first_name, last_name, email, phone, address, registration_date): This table stores information about customers, including their contact details and the date they registered.

- orders(order_id, customer_id, product_id, order_date, total_amount): This table stores details about orders, including the customer who placed the order, the product ordered, and the total amount.

- products(product_id, product_name, price, category): This table contains information about the products, including the name, price, and category.

- sales(sale_id, order_id, product_id, quantity, sale_date): This table stores the details of sales, including which product was sold, in what quantity, and on what date.

- order_items(order_item_id, order_id, product_id, quantity, unit_price, total_price, discount): This table stores individual items from each order, including the price per unit, total price, and any discount applied.

- categories(category_id, category_name, description): This table contains product categories, with a description for each category.

Relationships:
- orders.customer_id refers to customers.customer_id.
- orders.product_id refers to products.product_id.
- sales.order_id refers to orders.order_id.
- sales.product_id refers to products.product_id.
- order_items.order_id refers to orders.order_id.
- order_items.product_id refers to products.product_id.

Important Notes:
- The column total_price exists in the order_items table.
- The sales table contains details of each sale, and you may need to join it with order_items to get the total_price of each sale.
"""

def generate_sql(question: str):
    prompt = f"Schema: {SCHEMA_DESCRIPTION}\nUser Question: {question}\nGenerate a MySQL-compatible SQL query."

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": "You are a MySQL expert."}, {"role": "user", "content": prompt}],
    )

    response_text = response.choices[0].message.content  

    # Extract SQL query from code block
    pattern = r"```sql\s*(.*?)\s*```"
    matches = re.findall(pattern, response_text, re.DOTALL)

    return matches[0].replace("\n", " ").strip() if matches else None
