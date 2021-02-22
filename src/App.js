import React from 'react';
import { useSelector } from 'react-redux';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import { selectSignedIn } from './features/userSlice';
import './styles/app.css';

const App = () => {

    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div className="app">
            <Navbar />
            <HomePage />
            {isSignedIn && <Blogs />}
        </div>
    )
}

export default App
