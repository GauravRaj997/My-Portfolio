import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveLink(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Gaurav Raj</div>
        <ul className="nav-menu">
          <li>
            <button 
              className={activeLink === 'home' ? 'active' : ''} 
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={activeLink === 'about' ? 'active' : ''} 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li>
            <button 
              className={activeLink === 'projects' ? 'active' : ''} 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              className={activeLink === 'contact' ? 'active' : ''} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;