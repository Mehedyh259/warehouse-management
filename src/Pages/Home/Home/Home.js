import React, { useEffect } from 'react';
import CounterUp from '../CounterUp/CounterUp';
import HeroSection from '../HeroSection/HeroSection';
import Inventory from '../Inventory/Inventory';
import NewsLetter from '../NewsLetter/NewsLetter';
import AOS from 'aos'

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <HeroSection />
            <Inventory />
            <NewsLetter />
            <CounterUp />


        </div>
    );
};

export default Home;