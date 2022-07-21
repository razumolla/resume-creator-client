import React from 'react';
import template_1 from '../Assets/Images/resume template-1.png'
import template_2 from '../Assets/Images/resume-2.jpg'
import template_3 from '../Assets/Images/resume-3.png'

const Review = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-bold text-fuchsia-500 '>Reviews</h1>
            <div class="rating">
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
            </div>


            <div className='grid sm:grid-cols-1 lg:grid-cols-3 my-5 gap-5'>
                <div class="card lg:lg-w-full bg-purple-500 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">person name</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-dark">Go to Review</button>
                        </div>
                    </div>
                </div>


                <div class="card lg:lg-w-full bg-fuchsia-500 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">person name</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-dark">Go to Review</button>
                        </div>
                    </div>
                </div>


                <div class="card lg:lg-w-full bg-cyan-500 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">person name</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-dark">Go to Review</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Review;