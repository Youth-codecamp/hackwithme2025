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
        Hack With Me is a yearly, 24-hour hackathon for high school students that always takes place on August 16th. It’s a space where students come together to create exciting projects, solve real-world problems, and build their coding skills in a fun and collaborative environment. 
We believe Hack With Me should be accessible to everyone. That’s why anyone can host their own Hack With Me hackathon in their community. Together, we can make this a global movement! 
      </motion.p>
    </section>
  );
};

export default About;
