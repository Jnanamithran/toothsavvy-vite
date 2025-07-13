// src/components/Footer/Footer.component.jsx
import React from 'react';
import './Footer.css';

const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
];

const workingHours = [
  'Monday - Friday: 9:00 AM - 6:00 PM',
  'Saturday: 10:00 AM - 4:00 PM',
  'Sunday: Closed',
];

const contactDetails = [
  { label: 'Email', value: 'youremail@gmail.com' },
  { label: 'Phone', value: '+1 234 567 890' },
];

const address = '123 Dental Street, Tooth City, Smile State, 12345';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: (
      <i className="bi bi-facebook" aria-hidden="true" />
    ),
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com',
    icon: (
      <i className="bi bi-twitter-x" aria-hidden="true" />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (
      <i className="bi bi-instagram" aria-hidden="true" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="logo">Dental Care</h4>

      <nav className="footer-links">
        {footerLinks.map(({ label, href }) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>

      <div className="footer-section">
        <h4>Working Hours</h4>
        {workingHours.map((hour, index) => (
          <p className="footer-text" key={index}>{hour}</p>
        ))}
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        {contactDetails.map(({ label, value }) => (
          <p key={label} className="footer-text">
            <strong>{label}:</strong> {value}
          </p>
        ))}
      </div>

      <div className="footer-section">
        <h4>Address</h4>
        <p className="footer-text">{address}</p>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          {socialLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${name}`}
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="footer-text">
          Stay connected with us on social media for the latest updates and offers.
        </p>
      </div>

      <div className="footer-bottom-text">
        <p className="footer-text">© 2023 Dental Care. All rights reserved.</p>
        <p className="footer-text">Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
