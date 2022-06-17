import React from 'react'

function Occupation({ data }) {
    return (
        <div className='occupation'>
            <h3>{data.profession}</h3>
            <p>{data.title && `${data.title}.`}</p>
            <p>{data.time && `${data.time}.`}</p>
            <p>{data.employment && `${data.employment}.`}</p>
            <p>{data.info && `${data.info}.`}</p>
            {data.url &&
                <p className='more'>Mer information: <a href={data.url} className="more-link" target="_blank">Klicka här</a></p>}
        </div>
    )
}

export default Occupation;