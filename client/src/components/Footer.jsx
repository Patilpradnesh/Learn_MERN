import React from 'react';
import { NavLink } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} PCP Web. All rights reserved.
        </p>
        <div className="footer-links">
           <NavLink to="/about">About</NavLink>

          <a href="/service">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <p>
          Made with <span style={{color: "#e25555"}}>❤</span> by Pradnesh Patil
        </p>
      </div>
    </footer>
  );
};

