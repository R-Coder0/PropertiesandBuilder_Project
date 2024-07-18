import React, { useState } from 'react';
import './ServicePage.css';
import residentialSales from '../../assets/Services/residential properties.jpg';
import commercialSales from '../../assets/Services/commercial properties.jpg';
import residentialRentals from '../../assets/Services/residential rentals.jpg';
import commercialRentals from '../../assets/Services/commercial rentals.jpg';
import propertyManagement from '../../assets/Services/Property management.jpeg.jpg';
import investmentAdvisory from '../../assets/Services/investment advisory.jpg';
import legalAssistance from '../../assets/Services/law sevices.jpg';
import EnquiryForm from './Enquiry';

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Residential Properties',
      description: 'If you’re on the hunt for a new home, look no further. We offer a wide range of residential properties, from cozy apartments to luxurious villas, ensuring that you find a home that fits your lifestyle and budget.',
      image: residentialSales,
    },
    {
      id: 2,
      title: 'Commercial Properties',
      description: 'Expanding your business? We have a variety of commercial properties available, including office spaces and retail shops. Our team will help you find a property that aligns with your business needs and goals.',
      image: commercialSales,
    },
    {
      id: 3,
      title: 'Residential Rentals',
      description: 'Need a place to rent? We’ve got you covered. Our rental services include a variety of residential properties, whether you’re looking for a short-term lease or a long-term home.',
      image: residentialRentals,
    },
    {
      id: 4,
      title: 'Commercial Rentals',
      description: 'For businesses seeking rental spaces, we offer flexible leasing options for office spaces, retail locations, and more. We’ll help you find a space that supports your business growth.',
      image: commercialRentals,
    },
    {
      id: 5,
      title: 'Property Management',
      description: 'Owning a property comes with its challenges, but we’re here to help. Our property management services handle everything from tenant screening to maintenance, ensuring your property is well taken care of.',
      image: propertyManagement,
    },
    {
      id: 6,
      title: 'Investment Advisory',
      description: 'Real estate can be a great investment, and our investment advisory services provide you with the insights and guidance you need to make informed decisions. We’ll help you identify opportunities that offer the best returns.',
      image: investmentAdvisory,
    },
    {
      id: 7,
      title: 'Legal Assistance',
      description: 'Navigating the legal aspects of real estate can be complex. Our legal assistance services offer expert advice and support to help you manage contracts, disputes, and compliance issues effectively.',
      image: legalAssistance,
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
        {services.map(service => (
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
      {selectedService && <EnquiryForm service={selectedService} closeForm={closeForm} />}
    </div>
  );
};

export default ServicePage;
