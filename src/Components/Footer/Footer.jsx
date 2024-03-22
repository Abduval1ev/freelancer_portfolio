import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../../img/icons/instagram.svg'
import twitter from '../../img/icons/twitter.svg'
import guthub from '../../img/icons/gitHub.svg'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item"><Link href="#!"><img src={instagram} alt="Link" /></Link></li>
                            <li className="social__item"><Link href="#!"><img src={twitter} alt="Link" /></Link></li>
                            <li className="social__item"><Link href="#!"><img src={guthub} alt="Link" /></Link></li>
                        </ul>
                        <div className="copyright">
                            <p>© 2024 frontend-dev.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
