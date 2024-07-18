import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import EnquiryForm from '../Pages/Enquiry'; // Import the EnquiryForm component

const HeroSection = () => {
  const texts = [
    "Welcome to The Properties and Builders.",
    "Building Your Dreams, Brick by Brick.",
    "Your Trusted Partner in Real Estate."
  ];

  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [textColor, setTextColor] = useState('#fff');
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility

  useEffect(() => {
    let timer;
    if (isTyping) {
      timer = setTimeout(() => {
        handleTypewriter();
      }, 100);
    } else {
      timer = setTimeout(() => {
        handleBackspace();
      }, 50);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isTyping]);

  const handleTypewriter = () => {
    const fullText = texts[textIndex];
    if (charIndex < fullText.length) {
      const currentChar = fullText.charAt(charIndex);
      setCurrentText((prevText) => prevText + currentChar);
      setCharIndex((prevIndex) => prevIndex + 1);
      if (charIndex === 0 && texts[textIndex].charAt(charIndex) === ' ') {
        setTextColor('#73aa9f'); // Light green for the second line
      }
    } else {
      setIsTyping(false);
      setTimeout(() => {
        setIsTyping(true);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText('');
        setCharIndex(0);
        setTextColor('#fff'); // Reset to white
      }, 2000);
    }
  };

  const handleBackspace = () => {
    if (charIndex > 0) {
      setCurrentText((prevText) => prevText.slice(0, -1));
      setCharIndex((prevIndex) => prevIndex - 1);
    } else {
      setIsTyping(true);
    }
  };

  const handleGetStartedClick = () => {
    setIsFormVisible(true); // Show the enquiry form when "Get Started" is clicked
  };

  const closeForm = () => {
    setIsFormVisible(false); // Hide the form when it's closed
  };

  return (
    <div className="heroSection">
      <video className="heroVideo" autoPlay loop muted>
        <source src={require('../../assets/video/Hero.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="heroOverlay"></div>
      <div className="heroContent">
        <h1 className="hero-title" style={{ color: textColor }}>
          <span>{currentText}</span>
        </h1>
        <p className="hero-text">
          Building Your Dreams with Integrity and Excellence.
        </p>
        <button className="hero-button" onClick={handleGetStartedClick}>Get Started</button>
      </div>
      {isFormVisible && <EnquiryForm service="Real Estate Services" closeForm={closeForm} />}
    </div>
  );
};

export default HeroSection;
