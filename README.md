# NL2SQL Project

NL2SQL is a full-stack project that allows users to input natural language questions and converts them into SQL queries. It visualizes the results in charts such as line graphs, bar charts, etc., and also generates summaries.

## Table of Contents

- [Backend](#backend)
  - [Requirements](#backend-requirements)
  - [Setup](#backend-setup)
  - [Dependencies](#backend-dependencies)
- [Frontend](#frontend)
  - [Requirements](#frontend-requirements)
  - [Setup](#frontend-setup)
  - [Dependencies](#frontend-dependencies)
- [Contributing](#contributing)
- [License](#license)

---

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
   DB_HOST=
   DB_PORT=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   OPENAI_API_KEY=
   
5. Run the backend server:
   ```bash
   uvicorn app.main:app --reload

6. The backend should now be running on http://127.0.0.1:8000.

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
