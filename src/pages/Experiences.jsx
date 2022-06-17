import React, { useState } from 'react'
import imageUrl from '../images/images';
import Experience from '../components/Experience';
import './css/experience.css'

function Experiences() {

  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <div className='experience-div'>
      <div className='experience-pic-div'>
        <img className='experience-pic' src={imageUrl.happyBeach} alt="Johannes på bild" />
      </div>
          <Experience toggleExperience={toggle} selected={selected}/>
    </div>
  )
}

export default Experiences;