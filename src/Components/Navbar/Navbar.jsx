import React, { useEffect, useState } from 'react';
import "./Navbar.css";

import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';

import menu from "../../assets/menu.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])

  // Functionality for ToggleMenu...
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' alt='LensCraft logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        {/* <li><Link to='hero' smooth={true} offset={0} duration={500}>Portfolio</Link></li> */}
        <li><Link to='offers' smooth={true} offset={-240} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-80} duration={500}>About Us</Link></li>
        <li><Link to='gallery' smooth={true} offset={-240} duration={500}>Gallery</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-240} duration={500}>Testimonials</Link></li>
        {/* <li><Link to='hero' smooth={true} offset={0} duration={500}>Blog</Link></li> */}
        <li>
          <Link to='contact' smooth={true} offset={-240} duration={500} className='btn'>
            Contact
          </Link>
        </li>
      </ul>
      <img src={menu} alt='Menu icon' className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
