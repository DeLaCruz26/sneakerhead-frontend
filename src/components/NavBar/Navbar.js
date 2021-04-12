import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiConverseShoe } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div className='navbar'>
      <div className='navbar-container container'>
        <NavLink to='/' className="navbar-logo">
          <GiConverseShoe className='navbar-icon' />
          SNEAKER HEADS
        </NavLink>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/sneakers' className='nav-links' onClick={closeMobileMenu}>
              Sneakers
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/sneakers/new' className='nav-links' onClick={closeMobileMenu}>
              Add sneakers
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/sneakers/planner' className='nav-links' onClick={closeMobileMenu}>
              Create sneaker planner
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;