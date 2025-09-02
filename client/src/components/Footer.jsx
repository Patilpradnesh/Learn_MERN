import React from 'react';


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} PCP Web. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/about">About</a>
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

