import React from 'react'
import {useNavigate} from 'react-router-dom'

function ProjectItem({name, image, id}) {
  const navigate = useNavigate();
  return (
    <div 
        className='project-item' 
        onClick={() => {navigate('/project/' + id)}}
    >
        <div style={{backgroundImage: `url(${image})`}} className="bg-image"></div>
        <h2>{name}</h2>
    </div>
  )
}

export default ProjectItem