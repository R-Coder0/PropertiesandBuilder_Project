import React from 'react';
import './Testimonial.css'; // Adjust path if needed
import review1 from '../../assets/Reviews/review1.jpg'
import review2 from '../../assets/Reviews/review2.jpg'
import review3 from '../../assets/Reviews/review3.jpg'

const Testimonials = () => {
  const testimonialData = [
    {
      image: review1, // Ensure this path is correct
      feedback: "I was thoroughly impressed with the level of service provided. The team handled everything with such care, and the results exceeded my expectations. I will definitely be using them again!",
      name: "Rishabh Pratap",
    },
    {
      image: review2,
      feedback: "Fantastic support throughout the entire process. The team was always available to answer my questions and made me feel valued. They truly went above and beyond to ensure my satisfaction!",
      name: "Sakshi Jain",
    },
    {
      image: review3,
      feedback: "The service was outstanding! From start to finish, every detail was taken care of. I couldn't have asked for a better experience, and I highly recommend this team to anyone looking for quality service!" ,
      name: "Mohammad Arbaz",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-page">
      <h1 className="testimonials-title">Client Testimonials</h1>
      <div className="testimonials-grid">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div
              className="testimonial-image"
              style={{ backgroundImage: `url(${testimonial.image})` }}
            ></div>
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">- {testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
