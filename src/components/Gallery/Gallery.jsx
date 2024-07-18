import React, { useState, useEffect } from 'react';
import './Gallery.css';
import residentialImage from '../../assets/Gallery/header1.jpg'; // Update with appropriate images
import commercialImage from '../../assets/Gallery/header2.png';
import residentialRentalsImage from '../../assets/Gallery/header3.png';
import commercialRentalsImage from '../../assets/Gallery/header4.png';
import propertyManagementImage from '../../assets/Gallery/header5.png';
import investmentAdvisoryImage from '../../assets/Gallery/header6.png';
import legalAssistanceImage from '../../assets/Gallery/header7.png';
import clientImage1 from '../../assets/pics/pic1.jpg';
import clientImage2 from '../../assets/pics/pic2.jpg';
import clientImage3 from '../../assets/pics/pic3.jpg'; 
import clientImage4 from '../../assets/pics/pic4.jpg'; 
import clientImage5 from '../../assets/pics/pic5.jpg'; 
import clientImage6 from '../../assets/pics/pic6.jpg'; 
import clientImage7 from '../../assets/pics/pic7.jpg'; 
import clientImage8 from '../../assets/pics/pic8.jpg'; 
import reviews1 from '../../assets/Reviews/review1.jpg'
import reviews2 from '../../assets/Reviews/review2.jpg'
import reviews3 from '../../assets/Reviews/review3.jpg'
import reviews4 from '../../assets/Reviews/review4.jpg'
import reviews5 from '../../assets/Reviews/review5.jpg'
import { FaHome, FaBuilding, FaRuler, FaHandshake, FaChartLine } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';


const services = [
  {
    title: "Residential Properties",
    description: "If you’re on the hunt for a new home, look no further. We offer a wide range of residential properties, from cozy apartments to luxurious villas, ensuring that you find a home that fits your lifestyle and budget.",
    image: residentialImage,
    icon: <FaHome />,
  },
  {
    title: "Commercial Properties",
    description: "Expanding your business? We have a variety of commercial properties available, including office spaces and retail shops. Our team will help you find a property that aligns with your business needs and goals.",
    image: commercialImage,
    icon: <FaBuilding />,
  },
  {
    title: "Residential Rentals",
    description: "Need a place to rent? We’ve got you covered. Our rental services include a variety of residential properties, whether you’re looking for a short-term lease or a long-term home.",
    image: residentialRentalsImage,
    icon: <FaRuler />,
  },
  {
    title: "Commercial Rentals",
    description: "For businesses seeking rental spaces, we offer flexible leasing options for office spaces, retail locations, and more. We’ll help you find a space that supports your business growth.",
    image: commercialRentalsImage,
    icon: <FaBuilding />,
  },
  {
    title: "Property Management",
    description: "Owning a property comes with its challenges, but we’re here to help. Our property management services handle everything from tenant screening to maintenance, ensuring your property is well taken care of.",
    image: propertyManagementImage,
    icon: <FaHandshake />,
  },
  {
    title: "Investment Advisory",
    description: "Real estate can be a great investment, and our investment advisory services provide you with the insights and guidance you need to make informed decisions. We’ll help you identify opportunities that offer the best returns.",
    image: investmentAdvisoryImage,
    icon: <FaChartLine />,
  },
  {
    title: "Legal Assistance",
    description: "Navigating the legal aspects of real estate can be complex. Our legal assistance services offer expert advice and support to help you manage contracts, disputes, and compliance issues effectively.",
    image: legalAssistanceImage,
    icon: <FaLock />,
  },
];

const testimonials = [
  {
    name: "Rishabh Pratap",
    feedback: "I was thoroughly impressed with the level of service provided. The team handled everything with such care, and the results exceeded my expectations. I will definitely be using them again!",
    image: reviews1,
  },
  {
    name: "Raja Kumar",
    feedback: "Reliable, trustworthy, and incredibly skilled. I’m very pleased with the outcome of the project. They truly delivered on their promises, and I couldn't be happier!",
    image: reviews5,
  },
  {
    name: "Jitendar Sharma",
    feedback: "A truly remarkable experience! The attention to detail and professionalism displayed by the team was impressive. I’m grateful for their hard work and dedication!",
    image: reviews4,
  },
  {
    feedback: "Fantastic support throughout the entire process. The team was always available to answer my questions and made me feel valued. They truly went above and beyond to ensure my satisfaction!",
    name: "Sakshi Jain",
    image: reviews2,
  },
  {
    feedback: "The service was outstanding! From start to finish, every detail was taken care of. I couldn't have asked for a better experience, and I highly recommend this team to anyone looking for quality service!" ,
    name: "Mohammad Arbaz",
    image: reviews3,
  },
];

const clients = [
  { image: clientImage1 },
  { image: clientImage2 },
  { image: clientImage3 },
  { image: clientImage4 },
  { image: clientImage5 },
  { image: clientImage6 },
  { image: clientImage7 },
  { image: clientImage8 },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Services</h1>
      <div className="gallery-slider">
        {services.map((service, index) => (
          <div
            className={`gallery-card ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <div className="gallery-image" style={{ backgroundImage: `url(${service.image})` }}>
              <div className="gallery-icon">{service.icon}</div>
            </div>
            <div className="gallery-content">
              <h2 className="gallery-card-title">{service.title}</h2>
              <p className="gallery-card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="background-animation"></div>

      <div className="client-works">
        <h2 className="client-works-title">Our Clients & Works</h2>
        <div className="client-works-grid">
          {clients.map((client, index) => (
            <div className="client-work-card" key={index}>
              <div className="client-work-image" style={{ backgroundImage: `url(${client.image})` }}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-section">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-image" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
              <div className="testimonial-content">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <h3 className="testimonial-name">- {testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
