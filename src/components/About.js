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
       Hack With Me is a yearly, 24-hour coding hackathon for high school students that happens on August 16th. Students join to create projects, solve problems, and improve their coding skills.
       The goal of Hack With Me is to make hackathons accessible to everyone. That’s why anyone can organize their own Hack With Me event in their community.
      </motion.p>
    </section>
  );
};

export default About;
