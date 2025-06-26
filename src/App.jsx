import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <div className="header-div">
                <h1 className={"center-blue-text"}>SimilarSizeTo</h1>

                <h3 className={"subtitle"}>A website where you can compare measurements to real-world things!</h3>
            </div>
            <a href={"https://react.dev/"}>
            <img className={"img-builtonreact"} src={reactLogo} alt="react logo" />
            </a>
            <div className={"div-main-homepage"}>
                <button className={"btn-get-started"}>Get Started</button>
            </div>
        </div>
    </>
  )
}

export default App
