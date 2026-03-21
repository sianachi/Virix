# Video Chat App

## Setup Instructions

To set up the project's virtual environment and install dependencies:

1. Create the virtual environment:
   ```bash
   python3 -m venv .venv
   ```

2. Activate the virtual environment:
   ```bash
   source .venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

To run the application locally:

1. Ensure your virtual environment is activated:
   ```bash
   source .venv/bin/activate
   ```

2. Start the development server:
   ```bash
   uvicorn main:app --reload
   ```

The application will be accessible at `http://127.0.0.1:8000`.
