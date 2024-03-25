import React from 'react'
import ProjectsCard from '../ProjectcsCard/ProjectsCard'

export default function ProjectsProject() {

    const projects = [
        {
            "id": 1,
            "title": "Panto Mebel",
            "image": "image.png",
            "text": "lorem",
            "link": "https://panto-mebel.vercel.app/",
            "descriptions": "Этот проект выполнен с использованием языков программирования Html5, Scss, JavaScript."
        },
        {
            "id": 2,
            "title": "SquareUp",
            "image": "image copy.png",
            "text": "lorem",
            "link": "",
            "descriptions": "Этот проект выполнен с использованием языков программирования Html5, Scss, JavaScript."
        },
        {
            "id": 3,
            "title": "Mr.Beat",
            "image": "image copy 2.png",
            "text": "lorem",
            "link": "https://mr-beat-gamma.vercel.app/",
            "descriptions": "Этот проект выполнен с использованием языков программирования и библиотек Html5, Swiper, ReactJs, JavaScript."
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
