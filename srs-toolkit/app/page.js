'use client'

import LevelSelect from "./levelselect";
import { noto_sans, noto_serif } from "./fonts";
import Player from "./player";
import { useState } from "react";

export default function Home() {
  const [ page, setPage ] = useState('')

  function renderMain() {
    if (page == 'main') {
      return (
        <Player onBack={() => setPage('')} />
      )
    } else {
      return (
        <LevelSelect onSelect={() => setPage('main')}/>
      )
    }
  }
  return (
    <main>
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue">PimPrompt~</h1>
          <nav className={noto_sans.className}>
            <ul className="flex items-center space-x-4">
              <li><a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      {renderMain()}
    </main>
  );
}
