import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../../img/icons/instagram.svg'
import twitter from '../../img/icons/twitter.svg'
import guthub from '../../img/icons/gitHub.svg'
import style from '../../sass/blocks/footer.module.scss'

export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div className="container">
                    <div className={style.footer__wrapper}>
                        <ul className={style.social}>
                            <li
                                className={style.social__item}>
                                <Link to="#!">
                                    <img
                                        src={instagram} alt="Link"
                                    />
                                </Link>
                            </li>
                            <li
                                className={style.social__item}>
                                <Link to="#!">
                                    <img
                                        src={twitter}
                                        alt="Link"
                                    />
                                </Link>
                            </li>
                            <li
                                className={style.social__item}>
                                <Link to="https://github.com//Abduval1ev">
                                    <img
                                        src={guthub}
                                        alt="Link"
                                    />
                                </Link>
                            </li>
                        </ul>
                        <div className={style.copyright}>
                            <p>© 2024 frontend-dev.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
