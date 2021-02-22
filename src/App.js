import React from 'react'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar';
import './styles/app.css';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <HomePage />
        </div>
    )
}

export default App
