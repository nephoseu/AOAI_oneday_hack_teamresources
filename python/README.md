# Azure OpenAI One-day Hack Sample Application (Python)

## Running the application

Backend application is Python FastAPI app which is served using uvicorn.

```bash
cd api
python -m venv venv # optional but best practice
uvicorn main:app --reload
```

## Rebuilding frontend

In case you need to change something in the React app, make sure to rebuild it before testing through backend application. Build process is configured in such a way that it will automaticly copy the new files from build folder to the public folder of the API so that they can be served by the backend web server.

```bash
npm run build
```