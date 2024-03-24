import React from 'react'
import ProjectsCard from '../ProjectcsCard/ProjectsCard'

export default function ProjectsProject() {
    const projects = [
        {
            "id": 1,
            "title": "Panto Mebel",
            "image": "Снимок экрана (8).png",
            "text": "lorem",
            "descriptions": "lorem bla bla"
        },
        {
            "id": 2,
            "title": "SquareUp",
            "image": "image.png",
            "text": "lorem",
            "descriptions": "lorem bla bla"
        },
        {
            "id": 3,
            "title": "Mr.Beat",
            "image": "image copy.png",
            "text": "lorem",
            "descriptions": "lorem bla bla"
        },
        {
            "id": 4,
            "title": "Mr.Beat",
            "image": "image copy.png",
            "text": "lorem",
            "descriptions": "lorem bla bla"
        }
    ]

    const products = projects;

    return (
        <>
            <section className="section">
                <div className="container">
                    <h1 className='title-1'>Projects</h1>
                    <div className="projects">
                        {products.length ? (products.map(item => {
                            return <ProjectsCard
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                descriptions={item.descriptions}
                            />
                        })) : (<p className='no_projects'>No Projects!!!</p>)}
                    </div>
                </div>
            </section>
        </>
    )
}
