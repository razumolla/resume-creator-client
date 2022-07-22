import React from 'react';
import template_1 from '../Assets/Images/resume template-1.png'
import template_2 from '../Assets/Images/resume-2.jpg'
import template_3 from '../Assets/Images/resume-3.png'

const Templates = () => {
    return (
        <div className='my-10'>
            <h1 className='text-2xl text-center font-bold text-fuchsia-500 my-5'>Templates to win recuiters over</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 my-5 gap-5'>
             
            <div class="card lg:lg-w-full bg-base-100 shadow-xl">
                <img class="w-full" src={template_1} alt="Shoes" />
                <div class="card-body">
                    
                  
                    <div class="card-actions justify-center">
                        <div class="badge badge-outline text-primary">SEE MORE</div>
                        <div class="badge badge-outline text-primary">CREATE RESUME</div>
                    </div>
                </div>
            </div>

            
            <div class="card lg:lg-w-full bg-base-100 shadow-xl">
                <img class="w-full" src={template_2} alt="Shoes" />
                <div class="card-body">
                    
                   
                    <div class="card-actions justify-center">
                        <div class="badge badge-outline text-primary">SEE MORE</div>
                        <div class="badge badge-outline text-primary">CREATE RESUME</div>
                    </div>
                </div>
            </div>

            <div class="card lg:lg-w-full bg-base-100 shadow-xl">
                <img class="w-full" src={template_3} alt="Shoes" />
                <div class="card-body">
                   
                
                    <div class="card-actions justify-center">
                        <div class="badge badge-outline text-primary">SEE MORE</div>
                        <div class="badge badge-outline text-primary">CREATE RESUME</div>
                    </div>
                </div>
            </div>



            </div>

        </div>
    );
};

export default Templates;