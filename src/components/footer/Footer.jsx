import React from 'react';
import { contactInfo } from '../../data/contact-info';

import './footer.css';

function Footer() {
    console.log(contactInfo);
    return (
        <footer>
            {contactInfo?.map((site, index) => {
                return (
                    <a key={index} href={site.url} target="_blank">
                        <i className={`${site.icon} ${site.class}`} aria-hidden="true"></i>
                    </a>
                );
            })}
        </footer>
    )
}

export default Footer;