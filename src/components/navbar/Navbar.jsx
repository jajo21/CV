import React, { useState } from 'react'
import { menuItems } from './menu-items';

import './navbar.css'

function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  handleMenuClick = () => setMenuClicked(!menuClicked);

  handleMobileMenuClick = () => {
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
        {menuItems.map((item, index) => <li key={index} className={item.cName} onClick={handleMobileMenuClick}>{item.title}</li>)}
      </ul>
    </div>
  )
}

export default Navbar;