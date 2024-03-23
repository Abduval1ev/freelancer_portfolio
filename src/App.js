import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import NotFound from './Components/NotFound/NotFound'
import ScrollToTop from './utils/ScrollToTop'
import Project from './Components/Project/Project'
import Projects from './Pages/Projects'

export default function App() {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <Routes >
                <Route element={<Home />} path='/' />
                <Route element={<Projects />} path='/projects' />
                <Route element={<Project />} path='/project/:id' />
                <Route element={<Contacts />} path='/contacts' />
                <Route element={<NotFound />} path='*' />
            </Routes>
            <Footer />
        </>
    )
}
