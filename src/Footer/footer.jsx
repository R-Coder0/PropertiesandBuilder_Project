// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons as needed
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>The Properties and Builders</h3>
              <p>Your trusted partner in real estate, providing comprehensive solutions for all your property needs. From buying and selling to construction and renovation, we are dedicated to delivering excellence and value.</p>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">Property Rental</Link></li>
                <li><Link to="/services">Property Sale</Link></li>
                <li><Link to="/services">Property Management</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p><a href="mailto:info@thepropertiesbuilders.in">info@thepropertiesbuilders.in</a></p>
              <p><a href="tel:+919643121121">+91 964-312-1121</a></p>
              <p>C-32, Balaji Mandir Rd, Deep Vihar, Sector-24, Rohini, De, Delhi, 110042</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="social-icons">
            <a href="/" className='FB'><FaFacebook /></a>
            <a href="/" className='Li'><FaLinkedin /></a>
            <a href="/" className='IG'><FaInstagram /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} The Properties and Builders | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
