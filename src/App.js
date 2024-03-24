import React from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home"
import NotFound from "./Components/NotFound/NotFound"
import Contacts from "./Pages/Contacts"
import Projects from "./Pages/Projects"
import Project from "./Components/Project/Project"
import ScrollToTop from "./utils/ScrollToTop"


export default function App() {
    return (
        <>
            <div className="App">
                <ScrollToTop />
                <NavBar />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Projects />} path="/projects" />
                    <Route element={<Contacts />} path="/contacts" />
                    <Route element={<NotFound />} path="*" />
                </Routes>
                <Footer />
            </div>
        </>
    )
}
