import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './HeroSection.css'; 

const HeroSection = () => {
    const navigate = useNavigate(); 

    const handleSubscribeClick = () => {
        navigate('/email'); 
    };

    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Creative <i>Digital Marketing</i> Agency</h1>
                <p>
                    Our passion for creativity, data-driven insight, storytelling, and technology is what sets us apart. We are committed to helping businesses grow and thrive in the ever-changing digital world.
                </p>
                <button className="call-button" onClick={handleSubscribeClick}>
                    Subscribe
                </button>
            </div>
            <div className="hero-image">
                <img src="/images/3.jpg" alt="Creative Marketing Agency" />
            </div>
        </div>
    );
};

export default HeroSection;


