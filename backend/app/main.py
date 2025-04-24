from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
  return {"message": "Riftheart backend is lve"}
