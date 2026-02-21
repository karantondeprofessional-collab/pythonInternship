
from jose import jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext

SECRET = "mysecretkey"
pwd = CryptContext(schemes=["bcrypt"])

def hash_pass(p):
    return pwd.hash(p)

def verify(p, h):
    return pwd.verify(p, h)

def create_token(username):
    payload = {"sub": username, "exp": datetime.utcnow() + timedelta(hours=5)}
    return jwt.encode(payload, SECRET, algorithm="HS256")
