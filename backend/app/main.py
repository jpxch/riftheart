from fastapi import FastAPI
from app.api import summoner

app = FastAPI()
app.include_router(summoner.router)

@app.get("/")
def root():
  return {"message": "Riftheart backend is live"}
