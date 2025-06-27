// pages/HomePage.jsx
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'
import '../App.css'

function HomePage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <div className="header-div">
                    <Link to='/'>
                        <h1 className="center-blue-text">SimilarSizeTo</h1>
                    </Link>
                    <h3 className="subtitle">
                        A website where you can compare measurements to real-world things!
                    </h3>
                </div>

                <a href="https://react.dev/">
                    <img className="img-builtonreact" src={reactLogo} alt="react logo" />
                </a>

                <div className="div-main-homepage">
                    <Link to="/compare">
                        <button className="btn-get-started">Get Started</button>
                    </Link>
                    <br/>
                </div>
            </div>
        </>
    )
}

export default HomePage
