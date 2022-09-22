import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';


const SingleProduct = () => {
    let { id } = useParams()
    console.log(id)
    const [error, setError] = useState("")
     const { data:allProducts, isLoading, refetch } =  useQuery('allProducts', () => fetch(`http://localhost:5000/product/${id}`, {
        method: 'GET',
        headers:{
            'content-type' : 'application/json'
        }
    }).then(res => res.json()));
    if(isLoading){
        <Loading></Loading>
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    console.log(allProducts)
    
    
    const onSubmit = data => {
        if(data.quantity === ""){
            setError ("Please set your quantity")
            console.log("error")
            
        }else if(parseFloat(data.quantity) <= 0){
            setError("please Set Quentity More Then 0")

        } 
        else{
            
            fetch(`http://localhost:5000/product/${id}`,{
                method : 'PUT',
                headers : {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
    
            } )
            .then(res => res.json())
            .then(data => {
                setError("")
                refetch()
    
            })

           

        }
       
    };

    const hadleDelivered = (quantity , id) => {
        if(parseFloat(quantity) === 0) {
            setError("Sorry!You Have No Quantity To Delivered")

        }else{
            const newQuantity = parseFloat(quantity) - 1;
        console.log(newQuantity)
            const url1 = `http://localhost:5000/deliveredproduct/${id}`
            fetch(url1,{
                method:'PUT',
                headers:{'content-type':'application/json'},
                body: JSON.stringify({newQuantity})
    
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
              
                refetch()
                
            });

        }
        
        };


    return (
        <div data-theme = "autumn">
            <h2>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={allProducts?.img} className="w-24 md:w-96 lg:w-96 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold text-rose-800">{allProducts?.name}</h1>
                            <ol className='mt-6'>
                                <li className='font-bold'>Price : {allProducts?.price}Tk</li>
                                <li className='font-bold'>Quantity : {allProducts?.quantity}{allProducts?.meter}</li>
                                <li className='font-bold'>Supplier Name : {allProducts?.supplyer}</li>
                                <li className='font-bold'>EXP Date : {allProducts?.date}</li>

                            </ol>
                            <div className='flex items-center gap-4'>
                                <button onClick={()=>hadleDelivered(allProducts?.quantity , allProducts?._id)} className="btn btn-primary mt-4">Delivered</button>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <div className="input-group">
                                            <input c {...register("quantity")} type="number" placeholder="Type Quantity" className="input input-bordered mt-4" />
                                            <button className="btn btn-primary mt-4">Submit</button>
                                        </div>
                                        <p className='text-red-800'>{error}</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </h2>
        </div>
    );
};

export default SingleProduct;