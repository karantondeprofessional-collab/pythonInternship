from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from app.database import Base, engine
from app.routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API routes
app.include_router(router)

# Serve frontend folder
app.mount("/static", StaticFiles(directory="app/frontend"), name="static")

# Home page → login.html
@app.get("/")
def home():
    return FileResponse("app/frontend/login.html")

# Other pages
@app.get("/register")
def register_page():
    return FileResponse("app/frontend/register.html")

@app.get("/dashboard")
def dashboard_page():
    return FileResponse("app/frontend/dashboard.html")

@app.get("/projects-ui")
def projects_page():
    return FileResponse("app/frontend/projects.html")

@app.get("/tasks-ui")
def tasks_page():
    return FileResponse("app/frontend/tasks.html")
