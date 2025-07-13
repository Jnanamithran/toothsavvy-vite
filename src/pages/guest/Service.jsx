// src/pages/Service.jsx
import React from 'react';
import './Service.css';
import service1 from '../../assets/service-1.jpg';
import service2 from '../../assets/service-2.jpg';
import service3 from '../../assets/service-3.jpg';
import service4 from '../../assets/service-4.jpg';
import service5 from '../../assets/service-5.jpg';
import service6 from '../../assets/service-6.jpg';


const servicesData = [
  {
    id: 1,
    title: 'Routine Dental Care',
    description: 'Essential dental care to maintain oral health and prevent issues. This includes regular check-ups, professional cleanings, fluoride treatments, and early cavity detection and fillings. Our goal is a healthy, bright smile through consistent preventive care.',
    image: service1,
  },
  {
    id: 2,
    title: 'Smile Makeovers & Whitening',
    description: 'Enhance the aesthetics of your smile with treatments like teeth whitening, veneers, bonding, and smile makeovers, designed to improve appearance and boost confidence.',
    image: service2,
  },
  {
    id: 3,
    title: 'Orthodontic Treatment',
    description: 'Specialized treatments to correct misaligned teeth and jaws, offering solutions such as traditional braces, clear aligners (like Invisalign), and retainers for a perfectly straight smile.',
    image: service3,
  },
  {
    id: 4,
    title: 'Dental Surgery & Implants',
    description: 'Expert surgical procedures for various dental needs, including wisdom tooth extractions, dental implant placement, and corrective jaw surgery, performed with precision and care.',
    image: service4,
  },
  {
    id: 5,
    title: 'Gum Care & Treatment',
    description: 'Focused care for your gums and supporting bone structures, addressing issues like gum disease (gingivitis and periodontitis) through deep cleanings, scaling, root planing, and gum grafting.',
    image: service5,
  },
  {
    id: 6,
    title: "Children's Dental Care",
    description: 'Gentle and specialized dental care for children from infancy through adolescence, emphasizing preventive care, early detection of issues, and creating a positive dental experience for young patients.',
    image: service6,
  },
];

const Service = () => {
  return (
      <div className="service-container">
        <h1>Our Comprehensive Dental Services</h1>
        <div className="grid-container">
          {servicesData.map(({ id, title, description, image }) => (
            <div key={id} className="grid-item">
              <div className="service">
                <div className="image">
                  <img src={image} alt={title} />
                  <div className="service-content">
                    <h1>{title}</h1>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Service;