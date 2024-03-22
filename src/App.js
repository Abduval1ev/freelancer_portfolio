import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import NotFound from './Components/NotFound/NotFound'
import Projects from './Components/Projects/Projects'

export default function App() {
    return (
        <>
            <NavBar />
            <Routes >
                <Route element={<Home />} path='/' />
                <Route element={<About />} path='/about' />
                <Route element={<Projects />} path='/projects' />
                <Route element={<Contacts />} path='/contacts' />
                <Route element={<NotFound />} path='*' />
            </Routes>
            <Footer />
        </>
    )
}
