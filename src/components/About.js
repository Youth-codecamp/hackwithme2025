import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-page" id="about">
      <motion.h1 
        className="about-title"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Hack With Me 2025
      </motion.h1>
      <motion.p 
        className="about-paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Hack With Me 2025 is a fun and exciting 24-hour hackathon for high school students! During this event, students will work in teams on projects and learn coding together. It’s a great chance to turn ideas into reality, tackle real-world challenges, and improve coding skills. Join us for a fantastic experience filled with teamwork, creativity, and the opportunity to make a positive impact!
      </motion.p>
    </section>
  );
};

export default About;
