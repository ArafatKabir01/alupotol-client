import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ManageInventory = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/addProduct',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)

        } )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Your Product is added Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                document.getElementById("form").reset();

        })
    }
    return (
        <div  >
            <div className=' bg-gradient-to-r from-purple-500 to-pink-500'>
                <div  className=' '>
                    <form id='form' onSubmit={handleSubmit(onSubmit)}>
                        <div data-theme = "autumn" className="hero min-h-screen bg-base-200 ">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <div className="form-control w-80 ">
                                            <label className="label">
                                                <span className="label-text">Product Name</span>
                                            </label>
                                            <input {...register("name", { required: true })} type="text" className="input input-bordered" />
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input {...register("price", { required: true })} type="text" className="input input-bordered" />
                                            <label className="label">
                                                <span className="label-text">Quantity</span>
                                            </label>
                                            <input {...register("quantity", { required: true })} type="text" className="input input-bordered" />
                                            <label className="label">
                                                <span className="label-text">Supplier Name</span>
                                            </label>
                                            <input {...register("supplyre", { required: true })} type="text" className="input input-bordered" />
                                            <label className="label">
                                                <span className="label-text">Img URL</span>
                                            </label>
                                            <input {...register("img", { required: true })} type="text" className="input input-bordered" />
                                            <label className="label">
                                                <span className="label-text">EXP Date</span>
                                            </label>
                                            <input {...register("date", { required: true })} type="text" className="input input-bordered" />
                                            
                                        </div>
                                        
                                        <div  className="form-control mt-6">
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </form>
                </div>
                <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            />
            </div>
        </div>
    );
};

export default ManageInventory;