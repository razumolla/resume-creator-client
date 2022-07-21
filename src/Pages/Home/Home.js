import React from 'react';
import Banner from './Banner';
import CustomerHired from './CustomerHired';
import Faq from './Faq';
import Review from './Review';
import Templates from './Templates';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Templates></Templates>
            <CustomerHired></CustomerHired>
            <Review></Review>
            {/* <Faq></Faq> */}
        </div>
    );
};

export default Home;