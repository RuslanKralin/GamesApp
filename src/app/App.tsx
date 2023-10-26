import { AboutGame, Main } from 'pages'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<AboutGame />} />
            </Routes>
        </>
    )
}

export default App
