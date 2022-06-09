import React from 'react'
import ProjectItem from '../components/project-item/Project-item'
import { ProjectsInfo } from '../data/projects-info'
import './css/projects.css'

function Projects() {
  return (
    <div className='projects'>
      <h1 className='projects-title'>Mina projekt</h1>
      <div className='project-list'>
        {ProjectsInfo.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects