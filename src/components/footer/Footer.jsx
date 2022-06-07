import React from 'react';
import { contactURL } from '../../data/contact-url';

import './footer.css';

function Footer() {
    console.log(contactURL);
    return (
        <footer>
            <div>
                <a href={`mailto:${contactURL.email}`} target="_blank">
                    <i className="fas fa-at my-icon" aria-hidden="true"></i>
                </a>
                <a href={contactURL.github} target="_blank">
                    <i className="fab fa-github my-icon"></i>
                </a>
                <a href={contactURL.linkedIn} target="_blank">
                    <i className="fab fa-linkedin-in my-icon" aria-hidden="true"></i>
                </a>
                <a href={contactURL.instagram} target="_blank">
                    <i className="fab fa-instagram my-icon" aria-hidden="true"></i>
                </a>
                <a href={contactURL.facebook} target="_blank">
                    <i className="fab fa-facebook my-icon" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;