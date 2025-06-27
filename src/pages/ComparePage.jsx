// pages/ComparePage.jsx
import '../App.css'
import { Link } from 'react-router-dom'

function ComparePage() {
    return (
        <div className="header-div">
            <Link to='/'>
                <h1 className="center-blue-text">SimilarSizeTo</h1>
            </Link>
            <h3 className="subtitle">
                A website where you can compare measurements to real-world things!
            </h3>
        </div>
    )
}

export default ComparePage
