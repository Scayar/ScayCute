from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# Serve all files in the current directory as static files
app.mount("/", StaticFiles(directory=".", html=True), name="static")

# Root endpoint returns index.html
@app.get("/")
def read_index():
    return FileResponse("index.html") 