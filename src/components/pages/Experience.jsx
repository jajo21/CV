import React, { useState } from 'react'
import './css/experience.css'
import { experienceInfo } from '../../data/experience-info';
import imageUrl from '../../images/images';

function Experience() {

  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <>
      <div className='experience-pic-div'>
        <img className='experience-pic' src={imageUrl.happyBeach} alt="Johannes på bild" />
      </div>
      <div className='wrapper'>
        <div className='accordion'>
          {experienceInfo?.map((item, index) => {
            return (
              <div className='item'>
                <div className='title' onClick={() => toggle(index)}>
                  <h2>{item.title}</h2>
                  <h2><span>{selected === index ? '-' : '+'}</span></h2>
                </div>
                <div className={selected === index ? 'content show' : 'content'}>
                  {item.data.map((x) => (
                    <div className='occupation'>
                      <h3>{x.profession}</h3>
                      <p>{x.title && `${x.title}.`}</p>
                      <p>{x.time && `${x.time}.`}</p>
                      <p>{x.employment && `${x.employment}.`}</p>
                      <p>{x.info && `${x.info}.`}</p>
                      {x.url && <a href={x.url}>Mer info hittar du här</a>}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Experience;