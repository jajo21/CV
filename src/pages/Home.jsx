import React, {useState} from 'react';
import imageUrl from '../images/images';
import {skills} from '../data/skills.js';
import About from '../components/About';
import './css/home.css';

function Home() {

    const [more, setMore] = useState(false);

    return (
        <div className='home-div'>
            <div className='home-pic-div'>
                <img className='home-pic' src={imageUrl.creperiet} alt="Johannes på bild" />
            </div>
            <About more={more} setMore={setMore}/>
        </div>
    )
}

export default Home;