import React, { useState } from "react";
import "./ServicePage.css";
import residentialSales from "../../assets/pics/pic17.jpg";
import commercialSales from "../../assets/Services/service1.jpg";
import propertyManagement from "../../assets/Services/service2.jpg";
import investmentAdvisory from "../../assets/Services/service3.jpg";
import legalAssistance from "../../assets/Services/service4.jpg";
import EnquiryForm from "./Enquiry";

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Residential Properties",
      description:
        "If you’re on the hunt for a new home, look no further. We offer a wide range of residential properties, from cozy apartments to luxurious villas, ensuring that you find a home that fits your lifestyle and budget.",
      image: investmentAdvisory,
    },
    {
      id: 2,
      title: "Commercial Properties",
      description:
        "Expanding your business? We have a variety of commercial properties available, including office spaces and retail shops. Our team will help you find a property that aligns with your business needs and goals.",
      image: commercialSales,
    },
    {
      id: 5,
      title: "Property Management",
      description:
        "Owning a property comes with its challenges, but we’re here to help. Our property management services handle everything from tenant screening to maintenance, ensuring your property is well taken care of.",
      image: legalAssistance,
    },
    {
      id: 6,
      title: "Investment Advisory",
      description:
        "Real estate can be a great investment, and our investment advisory services provide you with the insights and guidance you need to make informed decisions. We’ll help you identify opportunities that offer the best returns.",
      image: residentialSales,
    },
    {
      id: 7,
      title: "Legal Assistance",
      description:
        "Navigating the legal aspects of real estate can be complex. Our legal assistance services offer expert advice and support to help you manage contracts, disputes, and compliance issues effectively.",
      image: propertyManagement,
    },
  ];

  const openForm = (service) => {
    setSelectedService(service);
  };

  const closeForm = () => {
    setSelectedService(null);
  };

  return (
    <div className="service-page">
      <h1 className="service-page-title">Our Services</h1>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-item-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-item-content">
              <h2 className="service-item-title">{service.title}</h2>
              <p className="service-item-description">{service.description}</p>
              <button
                className="service-item-button"
                onClick={() => openForm(service.title)}
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedService && (
        <EnquiryForm service={selectedService} closeForm={closeForm} />
      )}
    </div>
  );
};

export default ServicePage;
