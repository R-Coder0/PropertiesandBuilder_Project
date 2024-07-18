import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span>C-32, Balaji Mandir Rd, Deep Vihar, Sector-24, Rohini, De, Delhi, 110042</span>
        </div>
        <div className="top-bar-right">
          <a href="tel:+919643121121" className="contact-link">
            Contact: +91 964-312-1121
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
