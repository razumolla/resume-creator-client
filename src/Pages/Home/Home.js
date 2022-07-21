import React from 'react';
import Banner from './Banner';
import CustomerHired from './CustomerHired';
import CvBuilderFeatures from './CvBuilderFeatures';
import Faq from './Faq';
import Review from './Review';
import Templates from './Templates';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Templates></Templates>
            <CvBuilderFeatures></CvBuilderFeatures>
            <CustomerHired></CustomerHired>
            <Review></Review>
            <Faq></Faq>
        </div>
    );
};

export default Home;