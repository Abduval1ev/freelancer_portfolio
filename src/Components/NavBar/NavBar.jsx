import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../../sass/blocks/nav.module.module.scss'
import DarkMode from '../DarkMode/DarkMode'


export default function NavBar() {

    return (
        <>
            <nav className={style.nav}>
                <div className={style.container}>
                    <div className={style.nav_row}>
                        <NavLink to="/" className={style.logo}><strong>Freelancer</strong> portfolio</NavLink>

                        {/* <DarkMode /> */}

                        <ul className={style.nav_list}>
                            <li className={style.nav_list__item}>
                                <NavLink to="/"
                                    className={style.nav_list_link}>Home</NavLink>
                            </li>
                            <li
                                className={style.nav_list__item}>
                                <NavLink to="/projects"
                                    className={style.nav_list_link}>Projects</NavLink>
                            </li>
                            <li
                                className={style.nav_list__item}>
                                <NavLink to="/contacts"
                                    className={style.nav_list_link}>Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
