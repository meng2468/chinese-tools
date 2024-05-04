import {noto_serif, noto_sans} from "./fonts";

export default function LevelSelect({ onSelect }) {
    return (
        <div className="width-full">
            <div className="flex flex-col justify-center my-16">
                <div className="text-3xl width-full text-center inline">Welcome to <span className="text-primary">Pimprompt~</span> what's your level?</div>
                <div className={noto_sans.className}>
                    <div className="mt-8 flex flex-row justify-center">
                        <button onClick={onSelect} className="py-2 px-8 mx-2 bg-primary text-white font-semibold rounded">HSK1</button>
                        <button onClick={onSelect} className="py-2 px-8 mx-2 bg-primary text-white font-semibold rounded">HSK2</button>
                        <button onClick={onSelect} className="py-2 px-8 mx-2 bg-primary text-white font-semibold rounded">HSK3</button>
                    </div>
                    <div className="my-4 flex flex-row justify-center">
                        <button onClick={onSelect} className="py-2 px-8 mx-2 bg-primary text-white font-semibold rounded">HSK4</button>
                        <button onClick={onSelect} className="py-2 px-8 mx-2 bg-primary text-white font-semibold rounded">HSK5</button>
                        <button onClick={onSelect} className="py-2 px-8 mx-2 bg-primary text-white font-semibold rounded">HSK6</button>
                    </div>
                </div>
            </div>
        </div>
    )
}