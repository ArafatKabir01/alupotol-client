import React from 'react';

const ContractUs = () => {
    return (
        <div>
            
            <div style={{backgroundImage : "url('https://img.freepik.com/free-photo/colored-vegetables-white-background_179666-40.jpg?w=1380&t=st=1661872055~exp=1661872655~hmac=a921018f03ae2cca6fd24bd223b8d2dc1102ef9dc1ca8bb1cbb580988ce3bd47')"}} data-theme = "autumn" className="hero min-h-screen bg-opacity-60 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-rose-800	">Contract With Us</h1>
                        
                    </div>
                    <div className="card border-2 border-rose-800 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <textarea className="textarea textarea-primary" placeholder="Text"></textarea>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractUs;