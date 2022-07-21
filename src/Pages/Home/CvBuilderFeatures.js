import React from 'react';

const CvBuilderFeatures = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-fuchsia-500 my-10'>Easiest and most features packed CV builder available</h1>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 my-5 gap-5 '>

                <div class="card card-side bg-base-100 shadow-xl">
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
                    <div class="card-body text-left">
                        <h2 class="text-2xl font-bold text-green-500">Step-by-step builder</h2>
                        <p>Easy to use step-by-step builder enables you to create a well-polished, professional CV in minutes. Impress. Save time.</p>

                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                        </div> */}
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <img src="https://placeimg.com/200/280/arch" alt="Movie" />
                    <div class="card-body text-left">
                        <h2 class="text-2xl font-bold text-green-500">Pre written content</h2>
                        <p>Make your CV more sophisticated. Select from thousands of pre-written bullet points for hundreds of jobs and careers. Just click and insert them directly into your CV!</p>

                       
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <img src="https://placeimg.com/200/280/arch" alt="Movie" />
                    <div class="card-body text-left">
                        <h2 class="text-2xl font-bold text-green-500">Expert tips and guidance</h2>
                        <p>Get detailed CV-building tips and advice every step of the way. CV pro or beginner - we've got you covered.</p>

                       
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <img src="https://placeimg.com/200/280/arch" alt="Movie" />
                    <div class="card-body text-left">
                        <h2 class="text-2xl font-bold text-green-500">Unlimited CV & Resume Download </h2>
                        <p>Click the button to watch on Jetflix app.</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default CvBuilderFeatures;