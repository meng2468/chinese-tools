import random
from fastapi import FastAPI
from typing import List
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class Pims(BaseModel):
    word: str
    valid_words: List[str]

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/test")
def return_body(req: Pims):
    length = random.randint(6, 20)
    sentence = random.sample(req.valid_words, length)
    sentence.append(req.word)
    random.shuffle(sentence)
    sentence = ''.join(sentence)
    print(req.word, sentence)
    return {"data": sentence}

