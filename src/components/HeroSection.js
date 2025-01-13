import React from 'react';
import './HeroSection.css';
import logo from '../assets/logo192.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Hack With Me 2025</h1>
      <img src={logo} alt="Hack With Me Logo" className="hero-logo" />
      <h2 className="hero-subtitle">Come join and hack with your friends!</h2>
      <p className="hero-info">📅 Date: August 16th, 2025, 📍Venue: Coming Soon</p>
      <div className="hero-buttons">
        <a href="/register" className="hero-button">Register Now</a>
        <a href="/donate" className="hero-button">Donate Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
