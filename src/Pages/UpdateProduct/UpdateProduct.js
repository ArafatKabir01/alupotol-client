import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate, useParams } from 'react-router-dom';



const UpdateProduct = () =>{
    const navigate = useNavigate()
    const [updateProduct,setUpdateProduct] = useState({})
    

    let {id} = useParams()
    useEffect(()=>{
        const fetchData = async () => {
            const data = await  fetch(`https://rocky-oasis-35622.herokuapp.com/product/${id}`)
            const json = await data.json();
            setUpdateProduct(json)
           
    }
    fetchData()
},[])
 
  
    const { register, handleSubmit, watch,reset,resetField, formState: { errors } } = useForm();
    if(!updateProduct){
        return <Loading></Loading>
       }

    const onSubmit = data => {
        console.log(data)

        fetch(`https://rocky-oasis-35622.herokuapp.com/updateProduct/${id}`,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)

        } )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Your Product is Update Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                resetField()

        })
    }
    const handleCancle =()=>{
        navigate("/allProduct")
    }
  

    return (
        <div><br/><br/><br/>
            <form className='' id='form' onSubmit={handleSubmit(onSubmit)}>
            <div data-theme = "autumn" className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control w-72 md:w-72 lg:w-80">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input defaultValue={updateProduct?.name} name='name' {...register("name", { required: true })} type="text" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input defaultValue={updateProduct?.price} {...register("price", { required: true })} type="text" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input defaultValue={updateProduct?.quantity} {...register("quantity", { required: true })} type="text" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Supplier Name</span>
                                </label>
                                <input defaultValue={updateProduct?.supplyer} {...register("supplyre", { required: true })} type="text" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Img URL</span>
                                </label>
                                <input defaultValue={updateProduct?.img} {...register("img", { required: true })} type="text" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">EXP Date</span>
                                </label>
                                <input defaultValue={updateProduct?.date} {...register("date", { required: true })} type="text" className="input input-bordered" />
                                
                            </div>
                            
                            <div  className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                                <div className="modal-action">
                                <label onClick={()=>handleCancle()} className="btn btn-circle btn-outline btn-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </label>
                                </div>
                            </div>
                        </div>
                    </div>
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
        </form>`

        </div>
    )
}

export default UpdateProduct;