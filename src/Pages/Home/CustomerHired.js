import React from 'react';
import google from '../Assets/Images/rsz_google.png'
import amazon from '../Assets/Images/rsz_amazon.png'
import apple from '../Assets/Images/rsz_mac_1.png'
import facebook from '../Assets/Images/rsz_1images (2).png'





const CustomerHired = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-fuchsia-500 my-10'>Our Customers were hired by:</h1>
            <div className='flex justify-center gap-10 my-10'>
                <div class="group" >
                    <a href="https://www.google.com"><img src={google} alt="" className="" /></a>
                    <div class="opacity-0 h-50 group-hover:opacity-100 group-hover:h-full ">
                        <span className='text-orange-500 text-center'>Hired by Google</span>
                    </div>
                </div>
                <div class="group" >
                    <a href="https://www.amazon.com"><img src={amazon} alt="" className="" /></a>
                    <div class="opacity-0 h-50 group-hover:opacity-100 group-hover:h-full ">
                        <span className='text-orange-500'>Hired by Amazon</span>
                    </div>
                </div>
                <div class="group" >
                   <div> <a href="https://www.apple.com/"><img src={apple} alt="" className="" /></a></div>
                    <div class="opacity-0 h-50 group-hover:opacity-100 group-hover:h-full ">
                        <span className='text-orange-500'>Hired by Apple</span>
                    </div>
                </div>

                <div class="group">
                   <div> <a href="https://web.facebook.com/"><img src={facebook} alt="" className="" /></a></div>
                    <div class="opacity-0 h-50 group-hover:opacity-100 group-hover:h-full text-center">
                        <span className='text-orange-500'>Hired by Facebook</span>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default CustomerHired;