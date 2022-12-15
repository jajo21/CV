import React from 'react'

function Occupation({ data }) {
    return (
        <div className='occupation'>
            <h3>{data.profession}</h3>
            <ul>
                {data.title && <li>{data.title}.</li>}
                {data.time && <li>{data.time}.</li>}
                {data.employment && <li>{data.employment}.</li>}
                {data.info && <li>{data.info}.</li>}
                {data.url && <li className='more'>Mer information: <a href={data.url} className="more-link" target="_blank">Klicka här</a></li>}
            </ul>
        </div>
    )
}

export default Occupation;