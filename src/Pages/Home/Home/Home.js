import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import HeroSection from '../HeroSection/HeroSection';
import Inventory from '../Inventory/Inventory';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Inventory />
            <NewsLetter />
            <ContactUs />

        </div>
    );
};

export default Home;