// App.jsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ComparePage from './pages/ComparePage.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/compare" element={<ComparePage />} />
        </Routes>
    )
}

export default App
