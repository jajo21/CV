import React from 'react'
import { experienceInfo } from '../data/experience-info'
import Occupation from './Occupation'

function Experience({ toggleExperience, selected }) {
    return (
        <div className='wrapper'>
            <div className='accordion'>
                {experienceInfo?.map((item, index) => {
                    return (
                        <div className='item'>
                            <div className='title' onClick={() => toggleExperience(index)}>
                                <h2>{item.title}</h2>
                                <span>{selected === index ? '-' : '+'}</span>
                            </div>
                            <div className={selected === index ? 'content show' : 'content'}>
                                {item.data.map((data) => (
                                    <Occupation data={data} />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience