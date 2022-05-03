import AOS from 'aos';
import React, { useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="banner-area">
            <div data-aos="fade-up" data-aos-duration="1500" className="banner-text">
                <h1 className="text-white fw-bold">Your Health Is Our Priority</h1>
                <p className='text-white'>Fast and reliable medicine service 24/7 for you</p>
            </div>
        </div>
    );
};

export default HeroSection;