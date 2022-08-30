import React from 'react';

const ContractUs = () => {
    return (
        <div>
            
            <div style={{backgroundImage : "url('https://img.freepik.com/free-photo/colored-vegetables-white-background_179666-40.jpg?w=1380&t=st=1661872055~exp=1661872655~hmac=a921018f03ae2cca6fd24bd223b8d2dc1102ef9dc1ca8bb1cbb580988ce3bd47')"}} data-theme = "autumn" class="hero min-h-screen bg-opacity-60 ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold text-rose-800	">Contract With Us</h1>
                        
                    </div>
                    <div class="card border-2 border-rose-800 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <textarea class="textarea textarea-primary" placeholder="Text"></textarea>
                            </div>
                            
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractUs;