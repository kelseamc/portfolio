import React from 'react'


function ProjectCard({project}) {

    return (
      
        <div className="image-area" >
		    <div className="img-wrapper" >
			    <img src={project.img} alt={project.name} />
                    <h2>{project.name}<br />
                    <p>{project.description} <br /><br />
                        {project.languages}
                    </p>
                    </h2>
			    <ul>
				<li><a href={project.frontend}><i className="fab fa-github"></i></a></li>
				<li><a href={project.video}><i className="fab fa-youtube"></i></a></li>
				<li><a href={project.demo}><i class="fas fa-desktop"></i></a></li>
			    </ul>
		    </div>
        </div>

     
  )
}

export default ProjectCard
