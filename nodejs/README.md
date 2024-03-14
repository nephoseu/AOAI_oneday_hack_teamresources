# Azure OpenAI One-day Hack Sample Application (node.js)

## Running the application

Backend application is nodejs Express app.

```bash
npm start
```

## Rebuilding frontend

In case you need to change something in the React app, make sure to rebuild it before testing through backend application. Build process is configured in such a way that it will automaticly copy the new files from build folder to the public folder of the API so that they can be served by the backend web server.

```bash
cd frontend
npm run build
```