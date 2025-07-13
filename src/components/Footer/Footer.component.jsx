import React from 'react';
import './Footer.styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ToothSavvy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
