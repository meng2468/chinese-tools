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

@app.get("/pimprompt")
def read_root():
    return {"data": '''Welcome to Lesson 5 of Pimsleur Mandarin Chinese. Today, we will learn how to introduce yourself and ask someone's name. Let's begin!" Native Speaker: “你好。我的名字是张伟。” Instructor: "Repeat after me: 你好 - Hello." You: "你好." Instructor: "Now, 我的名字是 - My name is." You: "我的名字是." Instructor: "Let’s recall how to say 'thank you' which we learned in the last lesson." You: "谢谢." Instructor: "Imagine you are meeting someone for the first time. Respond
            appropriately." Instructor as Other Person: "你好，你叫什么名字？" You: "你好，我的名字是[Your Name]." Instructor: "Today, you’ve learned how to introduce yourself and ask someone’s name in Mandarin. Goodbye, or as you say in Mandarin, 再见!'''}

