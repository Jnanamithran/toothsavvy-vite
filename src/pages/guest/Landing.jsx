import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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

    // Check login status on mount
    useEffect(() => {
        const patientId = localStorage.getItem('loggedInPatientId');
        setIsLoggedIn(!!patientId);
    }, []);

    const handleBookNow = () => {
        if (isLoggedIn) {
            navigate('/book-appointment');
        } else {
            alert('Please sign in to book an appointment.');
            navigate('/signin');
        }
    };

    return (
        <section id="home">
            <div className="landing-container">
                <div className="left">
                    <img src={dentalImage} alt="Dental Clinic" />
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
