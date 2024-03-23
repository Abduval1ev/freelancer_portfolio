import React from 'react'
import style from '../../sass/blocks/projects.module.scss'
import ProjectProductCard from '../ProjectProductCard/ProjectProductCard'

export default function HomeProjects() {
    return (
        <>
            <main className={style.section}>
                <div className={style.container}>
                    <h2 className={style.title_1}>Projects</h2>
                    <ul className={style.projects}>
                        <ProjectProductCard />
                    </ul>
                </div>
            </main>
        </>
    )
}
