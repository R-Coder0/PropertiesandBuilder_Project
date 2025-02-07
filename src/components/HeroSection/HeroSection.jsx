import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./HeroSection.css";
import slider1 from "../../assets/slider1.jpg"; // Desktop Images
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import mobileSlider1 from "../../assets/mobileSlider.jpg"; // Mobile Images
import mobileSlider2 from "../../assets/slider2.jpg";
import mobileSlider3 from "../../assets/slider3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint
    };
    
    handleResize(); // Check screen size on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile
    ? [
        { image: mobileSlider1 },
        { image: mobileSlider2 },
        { image: mobileSlider3 },
      ]
    : [
        { image: slider1 },
        { image: slider2 },
        { image: slider3 },
      ];

  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="heroSection">
      <Slider {...sliderSettings} className="heroSlider">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="heroImage"
            />
          </div>
        ))}
      </Slider>

      {/* Form Overlay */}
      {isFormVisible && (
        <div className="formContainer">
          <div className="formHeader">
            <span className="formTitle">Get in Touch</span>
            <button className="closeButton" onClick={closeForm}>&times;</button>
          </div>

          <form onSubmit={handleSubmit} className="contactForm">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" required />
            <textarea placeholder="Your Preferred Location" required></textarea>
            <button type="submit" className="submitButton">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HeroSection;