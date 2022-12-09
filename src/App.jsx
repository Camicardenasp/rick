import { useState } from 'react'
import './App.css'
import CharacterList from '../components/CharacterList';


function App() {
  return (
    <div className="App container  bg-dark text-white py-3">
      <h1 className='text-center display-1 py-4'>Rick and Morty</h1>
      <CharacterList/>
    </div>
  )
}

export default App
