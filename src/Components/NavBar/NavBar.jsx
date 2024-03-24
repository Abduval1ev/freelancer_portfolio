import React from 'react'
import sun from '../../img/icons/sun.svg'
import { Link } from "react-router-dom"
import moon from '../../img/icons/moon.svg'

export default function NavBar() {
    return (
        <>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <Link to="/" className="logo"><strong>Freelancer</strong> portfolio</Link>

                        <button className="dark-mode-btn">
                            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                        </button>

                        <ul className="nav-list">
                            <li className="nav-list__item"><Link to="/" className="nav-list__link nav-list__ink--active">Home</Link></li>
                            <li className="nav-list__item"><Link to="/projects" className="nav-list__link">Projects</Link></li>
                            <li className="nav-list__item"><Link to="/contacts" className="nav-list__link">Contacts</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
