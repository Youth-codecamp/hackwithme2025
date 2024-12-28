import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleInternalLink = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

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
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleInternalLink('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                handleInternalLink('schedule');
              }}
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#partners"
              onClick={(e) => {
                e.preventDefault();
                handleInternalLink('partners');
              }}
            >
              Partners
            </a>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Donate
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={toggleMenu}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


