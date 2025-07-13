import React from 'react';
import about from '../../assets/about.jpg';
import './About.css'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h1>Where Every Smile Finds Its True Radiance</h1>
          <p>Step into a realm where the art of dentistry meets the warmth of genuine care. 
          At our core, we are driven by a singular passion: to cultivate not just healthy teeth,
           but truly radiant smiles that reflect inner confidence and joy. We understand that your journey 
           to optimal oral well-being is deeply personal, and we embrace it with unwavering dedication. 
           From the moment you arrive, you'll discover a sanctuary designed for comfort, where state-of-the-art 
           expertise is delivered with the gentlest touch and a profound sense of empathy. Our commitment extends 
           beyond meticulous treatments; it's about building lasting relationships, listening to your unique needs, 
           and guiding you through every step with clarity and compassion. We believe a healthy, beautiful smile is a
            profound gift, and it is our privilege to help you unveil its full splendor, 
          transforming not just your oral health, but enriching the very tapestry of your life.  
          </p>
        </div>
        <div className="about-image">
          <img src={about} alt="About Us" />
        </div>
      </div>
    </>
  );
};

export default About;
