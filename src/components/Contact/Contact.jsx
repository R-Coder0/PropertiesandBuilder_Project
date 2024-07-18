import React, { useState } from 'react';
import './Contact.css';
import contactImage from '../../assets/contactus.jpg';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_kghbh0a", "template_rfy705b", formData, "DPvnAmng7nUcj7P_e")
      .then((response) => {
        setStatus('Email sent successfully.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((error) => {
        setStatus('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-header" style={{ backgroundImage: `url(${contactImage})` }}>
        <div className="header-overlay">
          {/* <h1>Contact Us</h1>
          <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p> */}
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p><strong>Address:</strong> C-32, Balaji Mandir Rd, Deep Vihar, Sector-24, Rohini, De, Delhi, 110042</p>
          <p><strong>Phone:</strong> <a href="tel:+919643121121">+91 964-312-1121</a></p>
          <p><strong>Email:</strong> <a href="info@thepropertiesbuilders.in">info@thepropertiesbuilders.in</a></p>
          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="map-section">
        <h2>Our Location</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27988.449878778592!2d77.0441404!3d28.7328052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07399f5793ad%3A0xbfbf8595e21d23b2!2sTHE%20PROPERTIES%20%26%20BUILDERS!5e0!3m2!1sen!2sin!4v1721195739766!5m2!1sen!2sin"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
