import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <h1 className='not_found'>
                4<sup>0</sup>4
            </h1>
            <div className="go_to">
                <Link to={'/'}>
                    <button className='go_to_home'>Go To Home</button>
                </Link>
            </div>
        </>
    )
}
