// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import social media icons as needed
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
              <p><a href="tel:+919971120444">+91 9971-120-444</a></p>
              <p><a href="tel:+919643121121">+91 9643-121-121</a></p>
              <p>C-32, Balaji Mandir Road, Deep Vihar, Sector-24, Rohini, Delhi, 110042</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="social-icons">
            <a href="https://www.facebook.com/people/THE-PROPERTIES-BUILDERS/100064257332051/?mibextid=LQQJ4d&rdid=ERuprXIKfOAVJH2H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FmMdX1SJhb4JBseQu%2F%3Fmibextid%3DLQQJ4d" className='FB'><FaFacebook /></a>
            <a href="https://www.instagram.com/the_properties_/" className='IG'><FaInstagram /></a>
            <a href="https://www.youtube.com/@thepropertiesbuilders/featured" className='YT'><FaYoutube /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} The Properties and Builders | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
