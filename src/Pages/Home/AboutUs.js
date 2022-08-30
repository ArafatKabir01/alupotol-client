import React from 'react';
import img from '../../Images/Lovepik_com-450015730-various Fruits vector.png'
const AboutUs = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row gap-8">
                    <img src={img} class="w-24 md:w-32 lg:w-3/5 rounded-lg " />
                    <div className='ms-32'>
                        <h1 class="text-5xl font-bold text-rose-800 ">About Us</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button data-theme="autumn" class="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default AboutUs;