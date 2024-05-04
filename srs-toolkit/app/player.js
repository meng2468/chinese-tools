'use client'
import { hsk1Terms } from './wordgroups'

export default function Player({ onBack }) {
    function getWordGroup() {
        return {
            'word': hsk1Terms[Math.floor(Math.random() * hsk1Terms.length)],
            'valid_words': hsk1Terms
        }
    }

    async function getPimPrompt(word, valid_words) {
        const data = {
            'word': word,
            'valid_words': valid_words
        }
        const response = await fetch("http://127.0.0.1:8000/test", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        console.log(response)
        const movies = await response.json();
        console.log(movies);
        return movies['data']
        const utterance = new SpeechSynthesisUtterance(movies['data'])
        utterance.lang = 'zh-CN' // de-DE
        window.speechSynthesis.speak(utterance)
    }

    async function getLessonTerms() {
        const lessonLength = 10;
        let lessonTerms = []
        let valid_words = getWordGroup()['valid_words']
        for (let i = 0; i < lessonLength; i++) {
            lessonTerms.push(getWordGroup()['word'])
        }

        let pimprompts = []
        for (let term in lessonTerms) {
            const termPrompt = await getPimPrompt(lessonTerms[term], valid_words)
            pimprompts.push(termPrompt)
        }
        console.log(pimprompts)
    }

    return (
        <div className="">
            <div className='mt-4 flex justify-evenly'>
                <button  className='bg-blue-900 text-white px-8 py-1 rounded mx-8' onClick={onBack}>
                    Return
                </button>
                <button className='bg-blue-900 text-white px-8 py-1 rounded mx-8' onClick={getLessonTerms}>
                    Create Lesson
                </button>
            </div>
            <div className='flex mt-8 items-center justify-evenly'>
                <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                        <input type="range" className="w-60" min="0" max="100" />
                        <span>0:00</span><span>0:00</span>
                    </div>

                    <div>
                        <button className="mt-2 mx-2 bg-primary hover:underline text-white p-2 rounded">Slow Down</button>
                        <button className="mt-2 mx-2 bg-primary hover:underline text-white p-2 rounded">Explain</button>
                        <button className="mt-2 mx-2 bg-primary hover:underline text-white p-2 rounded">Harder</button>
                    </div>
                </div>
                <img src='/tree.jpg' alt='tree of progress' className="w-48" />
            </div>

        </div>
    )
}