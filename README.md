# NL2SQL

NL2SQL is a project that allows users to input natural language questions and it converts them into SQL queries. It visualizes the results in charts such as line graphs, bar charts, etc., and also generates summaries.

## Backend

### Backend Requirements

- Python 3.9+
- MySQL (or another relational database system)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/NL2SQL.git
   cd NL2SQL
2. Create and activate a Python virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. Install the backend dependencies:
   ```bash
   pip install -r requirements.txt

4. Create a .env file at the root level for your environment variables. Make sure you add your database credentials here (e.g., database URL, API keys, etc.):
   ```bash
   OPENAI_API_KEY=
   
5. Run the backend server:
   ```bash
   uvicorn app.main:app --reload

6. The backend should now be running on http://127.0.0.1:8000.

### MySQL Database Setup

To set up the MySQL database for the backend:

1. **Install MySQL** (if you haven't already):
   - On macOS:
     ```bash
     brew install mysql
     ```
   - On Ubuntu:
     ```bash
     sudo apt-get install mysql-server
     ```
   - On Windows, you can download the MySQL installer from the official [MySQL website](https://dev.mysql.com/downloads/installer/).

2. **Start MySQL Server**:
   - On macOS:
     ```bash
     brew services start mysql
     ```
   - On Ubuntu:
     ```bash
     sudo service mysql start
     ```
   - On Windows, you can start the MySQL service from the Services menu.

3. **Login to MySQL**:
   ```bash
   mysql -u root -p
   
4. **Create the database for the projectL**:
   ```bash
   CREATE DATABASE nl2sql;

5. **Import the database schema (structure of tables, e.g. table.sql):**:
   ```bash
   mysql -u username -p nl2sql < path_to_table.sql

6. **Import the data into the database (e.g. data.sql)**:
   ```bash
   mysql -u username -p nl2sql < path_to_data.sql
   
7. **Update your .env file with your MySQL credentials**:
   ```bash
   DB_HOST=localhost
    DB_PORT=3306
    DB_USER=username
    DB_PASSWORD=password
    DB_NAME=nl2sql

## Frontend

### Frontend Requirements

- React + Vite
- NPM or Yarn

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/NL2SQL.git
   cd NL2SQL/frontend
   
2. Install the frontend dependencies:
   ```bash
   npm install

3. Run the frontend development server:
   ```bash
   npm run dev

4. The frontend should now be running on http://localhost:5173.
