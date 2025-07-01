
import React from 'react';

import { motion } from 'framer-motion'; // 💥 Animation

export const About = () => {
  return (
    <div className="about-wrapper">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
      >
        <h1 className="about-heading">👋 Hey, this is the About Page!</h1>
        <p className="about-description">
          Welcome to our Learn MERN app. This section introduces who we are and what we do.
        </p>
      </motion.div>
    </div>
  );
};
