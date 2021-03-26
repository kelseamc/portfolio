import React from 'react'
import { projectArray } from '../data.js'
import ProjectCard from '../ProjectCard'


function Projects() {

    return (
        <div className="project-page">
            <div className="projects-container">
                {projectArray ?  projectArray.map((proj) => <ProjectCard key={proj.name} project={proj} /> ) : null}
            </div>
        </div>
    )
}

export default Projects
