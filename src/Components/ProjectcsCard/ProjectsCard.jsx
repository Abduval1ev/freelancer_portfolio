import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectsCard(item) {
    return (
        <>
            <article className="project">
                <img
                    className="project__img"
                    src={process.env.PUBLIC_URL
                        + '/ui/' +
                        item.image}
                    alt="Image"
                />
                <Link to={`${item.link}`}>
                    <h2 className="project__title">{item.title}</h2>
                </Link>
            </article>
        </>
    )
}
