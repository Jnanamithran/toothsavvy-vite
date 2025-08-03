import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// Assuming assets are in a relative path. Adjust if necessary.
import dentalImage from '../../assets/dental-image.png';
import Button from '../../components/Button/Button.component';
import './Landing.css';
import About from "./About";
import Service from "./Service";
import FAQ from "./Faq";
import Footer from "./footer";

const Landing = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check login status on component mount
    useEffect(() => {
        const patientId = localStorage.getItem('loggedInPatientId');
        setIsLoggedIn(!!patientId);
    }, []);

    // Handles the "Book Now" button click
    const handleBookNow = () => {
        if (isLoggedIn) {
            navigate('/book-appointment');
        } else {
            // Removed the alert for a better user experience,
            // navigating directly to the sign-in page.
            navigate('/signin');
        }
    };

    return (
        <section id="home">
            <div className="landing-container">
                <div className="left">
                    {/* Added a fallback for the image in case it fails to load */}
                    <img 
                        src={dentalImage} 
                        alt="Smiling patient at a dental clinic" 
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/500x550/00bcd4/FFFFFF?text=ToothSavvy'; }}
                    />
                </div>
                <div className="right">
                    <h1 className="hero-title">
                        A gorgeous <span className='smile'>smile</span> is never too far away.
                    </h1>
                    <p className="hero-sub">
                        Step into a place where care meets comfort, and every smile tells a story.
                    </p>
                    <div className="hero-buttons">
                        <Button className="btn btn-primary" onClick={handleBookNow}>
                            Book Now
                        </Button>
                        <ScrollLink
                            to="services"
                            smooth={true}
                            duration={500}
                            offset={-80}
                        >
                            <Button className="btn btn-outline">Learn More</Button>
                        </ScrollLink>
                    </div>
                </div>
            </div>

            {/* These sections are assumed to be components */}
            <div id="about">
                <About />
            </div>

            <div id="services">
                <Service />
            </div>

            <FAQ />
            <Footer />
        </section>
    );
};

export default Landing;
