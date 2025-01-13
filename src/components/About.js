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
        Hack With Me is a yearly, 24-hour coding hackathon for high school students that happens on August 16th. Students join to create projects, solve problems, and improve their coding skills. The goal of Hack With Me is to make hackathons accessible to everyone. 
        That’s why this year, we aim to bring together 200 high school students to share their ideas and showcase their talents.
      </motion.p>

      <motion.div
        className="spots-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="spots-title">Spots Remaining</h2>
        <motion.div
          className="spots-number"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, yoyo: Infinity }}
        >
          200
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
