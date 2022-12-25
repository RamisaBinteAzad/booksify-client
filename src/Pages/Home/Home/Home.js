import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AllCategories from '../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
      <div className=''>
        <Banner></Banner>

        <AllCategories></AllCategories>
        <Features></Features>
      </div>
    );
};

export default Home;