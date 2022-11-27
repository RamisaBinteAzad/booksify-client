import React from 'react';
import AllCategories from '../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <AllCategories></AllCategories>
        </div>
    );
};

export default Home;