import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import resume1 from '../Assets/Images/resume template-1.png';
import resume2 from '../Assets/Images/resume-2.jpg';
import resume3 from '../Assets/Images/resume-3.png';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            <div className='card-wraper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={resume1} alt="" />
                    </div>
                </div>
            </div>
        </Slider>

    );
};

export default ImageSlider;