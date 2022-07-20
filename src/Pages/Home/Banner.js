import React from 'react';
import banner from '../Assets/Images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse gap-4">
                    <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-70'>
                        <h1 class="text-4xl font-bold">Create a Professional resume</h1>
                        <p class="py-6">Fill in the blanks, choose a template, and download your resume instantly</p>
                        <button class="btn btn-success">Create Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;