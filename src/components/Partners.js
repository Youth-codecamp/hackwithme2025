import React from 'react';
import './Partners.css';
import { motion } from 'framer-motion';
import hackclubLogo from '../assets/hackclub.png';
import codecraftersLogo from '../assets/codecrafters.png';
import axureLogo from '../assets/axure.png';

const Partners = () => {
  const partners = [
    { id: 1, logo: hackclubLogo, alt: 'Hackclub', link: 'https://hackclub.com' },
    { id: 2, logo: codecraftersLogo, alt: 'Codecrafters', link: 'https://codecrafters.io/' },
    { id: 3, logo: axureLogo, alt: 'Axure', link: 'https://www.axure.com/' },
  ];

  return (
    <section className="partners-section" id="partners">
      <h1 className="partners-title">Our Partners</h1>
      <div className="partners-container">
        {partners.map((partner) => (
          <motion.div
            className="partner-box"
            key={partner.id}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={partner.link} target="_blank" rel="noopener noreferrer" className="partner_a">
              <img src={partner.logo} alt={partner.alt} className="partner-logo" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
