from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse
from starlette.staticfiles import StaticFiles

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# serve static files
@app.get("/")
async def main():
    return FileResponse("public/index.html")

# chatbot API to be extended with OpenAI code
@app.post("/chat")
async def chat(request: Request):
    json = await request.json()
    print(json)

    ############################
    ### Add OpenAI code here ###
    ############################

    return {"message": "Your message was: " + json["message"]}

# Image generattion API to be extended with OpenAI code
@app.post("/generateImage")
async def generateImage(request: Request):
    json = await request.json()
    print(json)

    ############################
    ### Add OpenAI code here ###
    ############################

    return {"url": "https://via.placeholder.com/100"}

app.mount("/", StaticFiles(directory="public"), name="ui")