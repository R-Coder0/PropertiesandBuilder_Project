import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span>
            C-32, Balaji Mandir Road, Deep Vihar, Sector-24, Rohini, Delhi,
            110042
          </span>
        </div>
        <div className="top-bar-right">
          <i className="fas fa-mobile-alt contact-icon"></i>
          <a href="tel:+919971120444" className="contact-link">
            +91 9971-120-444
          </a>
          ,{" "}
          <a href="tel:+919643121121" className="contact-link">
            +91 9643-121-121
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
