import React from 'react'
import { NavLink } from 'react-router-dom'
import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'
import style from '../../sass/blocks/nav.module.module.scss'


export default function NavBar() {
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <>
            <nav className={style.nav}>
                <div className={style.container}>
                    <div className="nav-row">
                        <NavLink href="/" className="logo"><strong>Freelancer</strong> portfolio</NavLink>

                        <button className="dark-mode-btn">
                            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                        </button>

                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink to="/"
                                    className="">Home</NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/projects"
                                    className=""
                                >Projects</NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/contacts"
                                    className=""
                                >Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
