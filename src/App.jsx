import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <h1 className="text-center">In Development</h1>
            <img src={reactLogo} alt="React Logo" />
            <img src={viteLogo} alt="vite logo" />
            <br/>
            <br/>
            <br/>
            <h4 className="center-blue-text">This website was coded by Lucas White for HackClub Summer Of Making 2025</h4>


        </>
    </>
  )
}

export default App
