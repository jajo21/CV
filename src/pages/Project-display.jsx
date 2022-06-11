import React from 'react'
import {useParams} from 'react-router-dom'
import { ProjectsInfo } from '../data/projects-info';
import './css/project-display.css'

function ProjectDisplay() {

  const { id } = useParams();
  const project = ProjectsInfo.find(project => project.id == id);

  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <div className='project-image-div'>
        <img src={project.image} alt={project.name} />
      </div>
      <p><b>Skapad:</b> {project.date}</p>
      <p><b>Detaljer:</b> {project.info}</p>
      <p><b>Tekniker:</b> {project.skills}</p>
      {project.liveUrl && 
      <p>Hemsidan: <a href={project.liveUrl} className="live-url-button">Klicka här</a></p>
      }
      <div className='gh-div'>
        <a href={project.repoUrl} target="_blank">
            <i className="fab fa-github gh-icon" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}

export default ProjectDisplay