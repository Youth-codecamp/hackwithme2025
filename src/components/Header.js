import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-icon ${isOpen ? 'open' : ''}`}></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#schedule" onClick={toggleMenu}>Schedule</a></li>
          <li><a href="#faq" onClick={toggleMenu}>FAQ</a></li>
          <li><a href="#team" onClick={toggleMenu}>Team</a></li>
          <li><a href="#sponsors" onClick={toggleMenu}>Sponsors</a></li>
          <li><a href="#donate" onClick={toggleMenu}>Donate</a></li>
          <li><a href="#register" onClick={toggleMenu}>Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
