import React from 'react'

export default function ProjectsCard(item) {
    return (
        <>
            <article className="project">
                <img src={process.env.PUBLIC_URL + '/ui/' + item.image} alt="Image" className="project__img" />
                <h2 className="project__title"></h2>
            </article>
        </>
    )
}
