import React from "react";
import { Link } from 'react-router-dom';
import dentalImage from '../../assets/dental-image.png';
import Button from '../../components/Button/Button.component';
import './Landing.css';
import About from "./About";
import Service from "./Service";
import FAQ from "./Faq";
import Footer from "./footer";

const Landing = () => {
    return (
        <section id="home">
            <div className="landing-container">
                <div className="left">
                    <img src={dentalImage} alt="Dental Clinic" />
                </div>
                <div className="right">
                    <h1 className="hero-title">A gorgeous <span className='smile'>smile</span> is never too far away.</h1>
                    <p className="hero-sub">Step into a place where care meets comfort, and every smile tells a story.</p>
                    <div className="hero-buttons">
                        <Link to="/appointment">
                            <Button className="btn btn-primary">Book Now</Button>
                        </Link>
                        <Link to="/services">
                            <Button className="btn btn-outline">Learn More</Button>
                        </Link>
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