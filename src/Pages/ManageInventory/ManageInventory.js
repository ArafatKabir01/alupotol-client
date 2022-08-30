import React from 'react';
import { useForm } from "react-hook-form";

const ManageInventory = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/allProducts',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)

        } )
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div  >
            <div className=' bg-gradient-to-r from-purple-500 to-pink-500'>
                <div  className=' '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div data-theme = "autumn" class="hero min-h-screen bg-base-200 ">
                            <div class="hero-content flex-col lg:flex-row-reverse">
                                <div class="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                                    <div class="card-body">
                                        <div class="form-control w-80 ">
                                            <label class="label">
                                                <span class="label-text">Product Name</span>
                                            </label>
                                            <input {...register("name", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Price</span>
                                            </label>
                                            <input {...register("price", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Quantity</span>
                                            </label>
                                            <input {...register("quantity", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Supplier Name</span>
                                            </label>
                                            <input {...register("supplyre", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Img URL</span>
                                            </label>
                                            <input {...register("img", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">EXP Date</span>
                                            </label>
                                            <input {...register("date", { required: true })} type="text" class="input input-bordered" />
                                            
                                        </div>
                                        
                                        <div  class="form-control mt-6">
                                            <button class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>

            </div>
        </div>
    );
};

export default ManageInventory;