import React from 'react';
import hired from '../Assets/Images/job hire.png'

const CustomerHired = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-secondary my-5'>Our Customers were hired by:</h1>
            <img className='w-full mb-10' src={hired} alt="" />
        </div>
    );
};

export default CustomerHired;