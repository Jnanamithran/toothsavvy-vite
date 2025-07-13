import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '1. What makes your clinic unique?',
      answer: (
        <>
          At DentalCare, we're committed to providing an exceptional dental experience. We pride ourselves on:
          <ul>
            <li><b>Patient-Centered Care:</b> We listen to your concerns and tailor treatment plans to your specific needs and comfort.</li>
            <li><b>Experienced & Compassionate Team:</b> Our dentists and staff are highly skilled, friendly, and dedicated to making your visit comfortable.</li>
            <li><b>Modern Technology:</b> We invest in advanced dental technology for precise diagnoses and more efficient, comfortable treatments.</li>
            <li><b>Comfortable Environment:</b> Our clinic is designed to be welcoming and relaxing, helping to alleviate dental anxiety.</li>
          </ul>
        </>
      ),
    },
    {
      question: '2. Do you accept dental insurance?',
      answer: (
        <>
          Yes, we work with a wide range of dental insurance providers to help you maximize your benefits. We recommend you contact our front desk with your policy details (provider, group number, ID) before your appointment.
        </>
      ),
    },
    {
      question: '3. How often should I visit the dentist?',
      answer: (
        <>
          For optimal oral health, we recommend visiting us every six months for check-ups and professional cleaning.
        </>
      ),
    },
    {
      question: '4. What dental services do you provide?',
      answer: (
        <>
          We offer:
          <ul>
            <li><b>Preventive Care:</b> Cleanings, fluoride, exams</li>
            <li><b>Restorative:</b> Fillings, crowns, implants</li>
            <li><b>Cosmetic:</b> Whitening, veneers, smile makeovers</li>
            <li><b>Specialized:</b> Root canals, gum treatment</li>
          </ul>
        </>
      ),
    },
    {
      question: '5. How do you ensure hygiene & safety?',
      answer: (
        <>
          We follow strict sterilization protocols including:
          <ul>
            <li>Medical-grade instrument sterilization</li>
            <li>Room disinfection after every patient</li>
            <li>Single-use disposables</li>
            <li>Staff trained in hygiene protocols</li>
          </ul>
        </>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
          onClick={() => toggleFAQ(index)}
          style={{ cursor: 'pointer' }}
        >
          <div className="faq-question">
            {faq.question}
            <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
          </div>
          {openIndex === index && ( 
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
