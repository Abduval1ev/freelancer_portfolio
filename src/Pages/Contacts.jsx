import React from 'react'
import { Link } from 'react-router-dom'

export default function Contacts() {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content_list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Uzbekistan, Tashkent</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p>
                                <Link to="tel:+79051234567">+998 (90) 064-28-09</Link>
                            </p>
                        </li>
                        <li className="content-list--item">
                            <h2 className="title-2">Email</h2>
                            <p>
                                <Link to="mailto:webdev@protonmail.com">abduvalievabap@gmail.com</Link>
                            </p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}
