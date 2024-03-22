import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <>


            <main class="section">
                <div class="container">
                    <h2 class="title-1">Projects</h2>
                    <ul class="projects">
                        <li class="project">
                            <Link to="/">
                                <img src="./img/projects/01.jpg" alt="Project img" class="project__img" />
                                <h3 class="project__title">Gaming streaming portal</h3>
                            </Link>
                        </li>
                        <li class="project">
                            <Link to="/">
                                <img src="./img/projects/02.jpg" alt="Project img" class="project__img" />
                                <h3 class="project__title">Video service</h3>
                            </Link>
                        </li>
                        <li class="project">
                            <Link to="/">
                                <img src="./img/projects/03.jpg" alt="Project img" class="project__img" />
                                <h3 class="project__title">Video portal</h3>
                            </Link>
                        </li>

                        <li class="project">
                            <img src="./img/projects/04.jpg" alt="Project img" class="project__img" />
                            <h3 class="project__title">Dating app</h3>
                        </li>
                        <li class="project">
                            <img src="./img/projects/05.jpg" alt="Project img" class="project__img" />
                            <h3 class="project__title">Landing</h3>
                        </li>
                        <li class="project">
                            <img src="./img/projects/06.jpg" alt="Project img" class="project__img" />
                            <h3 class="project__title">Gaming community</h3>
                        </li>

                    </ul>
                </div>
            </main>

        </>
    )
}
