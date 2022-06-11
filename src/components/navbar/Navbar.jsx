import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { menuItems } from './menu-items';

import './navbar.css'

function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => setMenuClicked(!menuClicked);

  const handleMobileMenuClick = () => {
    if (window.innerWidth <= 1000) {
      setMenuClicked(!menuClicked);
    }
  }

  return (
    <div className='navbar-items'>
      <h1 className='navbar-logo'>Johannes Jakobsson</h1>
      <div className='menu-icon' onClick={handleMenuClick}>
        <i className={menuClicked ? 'fas fa-times' : 'fa fa-bars'}></i>
      </div>
      <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
        {menuItems.map((item, index) => {
          return(
            <li key={index}>
              <Link to={item.url} className={item.cName} onClick={handleMobileMenuClick}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar;