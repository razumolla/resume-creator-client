import React from 'react';
import banner from '../Assets/Images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:bg-base-200 sm:bg-base-0">
                <div className="hero-content flex-col lg:flex-row-reverse gap-4">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='m-20 '>
                        <h1 className="text-4xl font-bold">Create a Professional
            
                         CV/Resume & Cover Letter Templates</h1>
                        <p className="py-6">Fill in the blanks, choose a template, and download your resume instantly</p>
                        <button className="btn btn-success">Create Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;