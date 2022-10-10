import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { navbarInfo } from '../data/navbar-info';

import './css/navbar.css'

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
      <ul className={menuClicked ? 'nav-menu small-active' : 'nav-menu'}>
        {navbarInfo.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.url} className={item.cName} onClick={handleMobileMenuClick}>{item.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar;