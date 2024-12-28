import React from 'react';
import { FaDiscord, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://discord.com/invite/h5dfqzGZ22" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        <a href="https://www.instagram.com/youthcodecamp_rw/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/company/youth-code-camp/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Youth-codecamp" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
      <p className="footer-text">
        Youth CodeCamp is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499). Copyright © 2024.
      </p>
    </footer>
  );
};

export default Footer;