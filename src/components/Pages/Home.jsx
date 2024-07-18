import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import Blogs1 from '../../assets/Blogs/blogs1.jpg'
import Blogs2 from '../../assets/Blogs/blogs2.jpg'
import Blogs3 from '../../assets/Blogs/blogs3.jpg'
import Testimonials from '../Testimonial/Testimonials';
import './Home.css';

// Services Section
const Services = () => {
  const services = [
    { title: 'Property Rental', description: 'Find your perfect rental property with us.', icon: 'fas fa-home' },
    { title: 'Property Sale', description: 'Get the best deals on property sales.', icon: 'fas fa-dollar-sign' },
    { title: 'Property Management', description: 'Comprehensive management solutions for your properties.', icon: 'fas fa-tools' },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service">
              <i className={`service-icon ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Us Section
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>We are a team of dedicated professionals committed to providing top-notch services to our clients. Our expertise spans across various fields, ensuring comprehensive solutions for your needs.</p>
          </div>
          <div className="about-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/4jnzf1yj48M?autoplay=1&loop=1&playlist=4jnzf1yj48M"
              title="About Us Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};


// Call to Action (CTA) Section
const CallToAction = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // Change '/contact' to the actual path of your contact page
  };

  return (
    <section className="call-to-action">
      <div className="container">
        <h2>Ready to start your project?</h2>
        <button onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

// Blog Preview Section
const BlogPreview = () => {
  const blogPosts = [
    { title: 'Latest Trends in Property Management', snippet: 'Stay updated with the latest trends in property management...', image: Blogs1 },
    { title: 'Property Investment Tips', snippet: 'Learn how to make the best property investments with these tips...', image: Blogs2 },
    { title: 'Property Investment Tips', snippet: 'Learn how to make the best property investments with these tips...', image: Blogs3 },
  ];

  return (
    <section className="blog-preview">
      <div className="container">
        <h2>From Our Blog</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <div className="image-card">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="description-card">
                <h3>{post.title}</h3>
                <p>{post.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <AboutUs />
      <CallToAction />
      <BlogPreview />
      <Testimonials />
    </div>
  );
};

export default Home;
