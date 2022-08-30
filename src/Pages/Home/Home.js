import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import BestSell from './BestSell';
import ContractUs from './ContractUs';
import Products from './Products';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Products/>
            <AboutUs/>
            <ContractUs/>
            <BestSell></BestSell>
            
        </div>
    );
};

export default Home;