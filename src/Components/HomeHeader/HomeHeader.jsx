import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeHeader() {
    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Hi, my name is <em>Abdumannof</em></strong>
                        <br />
                        a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                    <Link href="#!" className="btn">Download CV</Link>
                </div>
            </header>
        </>
    )
}
