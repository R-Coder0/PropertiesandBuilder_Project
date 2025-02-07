import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import Property1 from "../../assets/Gallery/header2.png"; // Example image paths, replace with actual images
import Property2 from "../../assets/Gallery/header2.png";
import Property3 from "../../assets/Gallery/header2.png";
import Blogs1 from "../../assets/pics/pic11.jpg";
import Blogs2 from "../../assets/pics/pic14.jpg";
import Blogs3 from "../../assets/pics/pic16.png";
import Testimonials from "../Testimonial/Testimonials";
import Modal from "./Modal";
import EnquiryForm from "./Enquiry";
import "./Home.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// Featured Properties Section
const FeaturedProperties = () => {
  const properties = [
    {
      title: "1 BHK Flat",
      price: "₹2.35 Cr",
      size: "1850 sqft",
      location: "Rohini",
      status: "",
      image: Property1,
      imagesCount: 18,
    },
    {
      title: "2 BHK Flat",
      price: "₹37 Lac",
      size: "1050 sqft",
      location: "Rohini Sector 24",
      image: Property2,
      imagesCount: 9,
    },
    {
      title: "3 BHK Flat",
      price: "₹1.30 Cr",
      size: "1800 sqft",
      location: "Deep Vihar",
      image: Property3,
      imagesCount: 50,
    },
  ];
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleEnquiryClick = (property) => {
    setSelectedProperty(property); // Set the selected property
    setIsFormVisible(true); // Show the enquiry form
  };

  const closeForm = () => {
    setIsFormVisible(false); // Hide the form when it's closed
  };

  return (
    <section className="featured-properties">
      <div className="container">
        <h2>Featured Properties</h2>
        <div className="properties-container">
          {properties.map((property, index) => (
            <div key={index} className="property-card">
              <div className="property-image">
                <img src={property.image} alt={property.title} />
              </div>
              <div className="property-content">
                <p className="price">{property.title}</p>
                <p className="location">{property.location}</p>
                {property.status && <p className="status">{property.status}</p>}
                <div className="button-container">
                  <button className="view-details"   onClick={() => handleEnquiryClick(property)}
                  >View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isFormVisible && (
        <EnquiryForm
          service={`Enquiry for ${selectedProperty?.title}`}
          closeForm={closeForm}
        />
      )}
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
          <div className="about-text space-y-4">
            <p>
            <strong>The Properties and Builders</strong> is a team of dedicated professionals offering exceptional real estate and construction services. From property sales and rentals to custom building solutions, we ensure seamless transactions and tailored projects with professionalism and precision.
            </p>
            <p>
            Customer satisfaction drives us. We prioritize transparency, personalized service, and innovation to exceed expectations. Beyond business, we build lasting relationships based on trust and reliability.
            </p>
            <p>
            Thank you for choosing <strong>The Properties and Builders</strong>—your trusted partner in turning property dreams into reality.
            </p>
          </div>
          <div className="about-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/TNX4wDsZN-M?autoplay=1&loop=1&playlist=TNX4wDsZN-M"
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
    navigate("/contact"); // Change '/contact' to the actual path of your contact page
  };

  return (
    <section className="call-to-action">
      <div className="Cta_button">
        <h2>Ready to start your project?
          <br />
          <span
          style={{
            display: 'flex',
            alignItems:'center',
            gap: '20px',
            marginTop: '20px',
            fontSize:"1.1rem",
            fontWeight: "normal"
          }}
          ><FaPhoneAlt/> Call Us at +91 9971-120-444</span>
          <br />
            <span
          style={{
            display: 'flex',
            alignItems:'center',
            gap: '20px',
            marginTop:'-40px',
            fontSize:"1.1rem",
            fontWeight: "normal"
          }}
            ><FaEnvelope/> Mail Us at info@thepropertiesbuilders.in</span>
        </h2>
        <button onClick={handleContactClick}>Contact Us</button>
      </div>
    </section>
  );
};

// Blog Preview Section
const BlogPreview = () => {
  const blogPosts = [
    {
      title: "Navigating the Property Market in 2024",
      content:
        "Explore the key trends and forecasts for the property market in 2024. From market analysis to investment opportunities, learn how to make informed decisions in the evolving landscape of property sales and purchases.",
      image: Blogs1, // Ensure images are relevant to the content
    },
    {
      title: "Expert Tips for First-Time Home Buyers",
      content:
        "Buying your first home can be daunting. Get expert advice tailored to help first-time buyers navigate through the complexities of purchasing a home, ensuring a smooth and successful transaction.",
      image: Blogs2,
    },
    {
      title: "Maximizing ROI in Real Estate",
      content:
        "Discover strategies for maximizing your return on investment in real estate. This guide covers everything from property selection to market timing, designed for both seasoned investors and new entrants.",
      image: Blogs3,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="blog-preview">
      <div className="container">
        <h2><span className="animated-underline">Insights</span> from The Properties and Builder</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-post"
              onClick={() => openModal(post)}
            >
              <div className="image-card">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="description-card">
                <h3>{post.title}</h3>
                <p>{post.snippet}</p> {/* Use snippet instead of content */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && <Modal post={selectedPost} closeModal={closeModal} />}
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProperties />
      <AboutUs />
      <CallToAction />
      <BlogPreview />
      <Testimonials />
    </div>
  );
};

export default Home;
