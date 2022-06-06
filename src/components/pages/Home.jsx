import React from 'react'

function Home() {
    return (
        <div>
            <ul className="ul-nav">
                <li><a href="#hero"><i className="fas fa-home"></i></a></li>
                <li><a href="#projects" id="project"><i className="fas fa-folder"></i></a></li>
                <li><a href="#about-link" id="about"><i className="fas fa-user"></i></a></li>
                <li><a href="#contact-link" id="contact"><i className="fas fa-envelope-open-text"></i></a></li>
            </ul>
        </div>
    )
}

export default Home