
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models, schemas, auth

router = APIRouter()

def db():
    d = SessionLocal()
    try: yield d
    finally: d.close()

@router.post("/register")
def register(user: schemas.UserCreate, db: Session = Depends(db)):
    u = models.User(username=user.username, password=auth.hash_pass(user.password))
    db.add(u); db.commit()
    return {"msg":"Registered"}

@router.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(db)):
    u = db.query(models.User).filter(models.User.username==user.username).first()
    if not u or not auth.verify(user.password, u.password):
        raise HTTPException(401,"Invalid login")
    return {"token": auth.create_token(u.username)}

@router.post("/projects")
def create_project(p: schemas.ProjectCreate, db: Session = Depends(db)):
    proj = models.Project(name=p.name, description=p.description, owner_id=1)
    db.add(proj); db.commit()
    return {"msg":"Project created"}

@router.get("/projects")
def get_projects(db: Session = Depends(db)):
    return db.query(models.Project).all()

@router.post("/tasks")
def create_task(t: schemas.TaskCreate, db: Session = Depends(db)):
    task = models.Task(title=t.title, project_id=t.project_id)
    db.add(task); db.commit()
    return {"msg":"Task created"}

@router.get("/tasks")
def get_tasks(db: Session = Depends(db)):
    return db.query(models.Task).all()
