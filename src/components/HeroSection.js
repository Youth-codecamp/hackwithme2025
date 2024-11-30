import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Hack With Me 2025</h1>
      <h2 className="hero-subtitle">Come join and hack with your friends!</h2>
      <p className="hero-info">📅 Date: August 16th, 2025</p>
      <div className="hero-buttons">
        <a href="#register" className="hero-button">Register Now</a>
        <a href="#donate" className="hero-button">Donate Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
