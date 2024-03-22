import React from 'react'
import ProjectProductCard from '../ProjectProductCard/ProjectProductCard'

export default function Projects() {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        <ProjectProductCard />
                    </ul>
                </div>
            </main>

        </>
    )
}
