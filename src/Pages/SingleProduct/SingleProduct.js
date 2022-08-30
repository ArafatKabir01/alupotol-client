import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";


const SingleProduct = () => {
    let { id } = useParams()
    console.log(id)
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/product/${id}`,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)

        } )
        .then(res => res.json())
        .then(data => {
            window.location.reload()

        })
    };

    const hadleDelivered = (quantity , id) => {
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
                console.log(product);
              
                window.location.reload()
                
            });
        };


    return (
        <div data-theme = "autumn">
            <h2>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={product.img} class="w-24 md:w-96 lg:w-96 rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold text-rose-800">{product.name}</h1>
                            <ol className='mt-6'>
                                <li className='font-bold'>Price : {product.price}Tk</li>
                                <li className='font-bold'>Quantity : {product.quantity}{product.meter}</li>
                                <li className='font-bold'>Supplier Name : {product.supplyer}</li>
                                <li className='font-bold'>EXP Date : {product.date}</li>

                            </ol>
                            <div className='flex items-center gap-4'>
                                <button onClick={()=>hadleDelivered(product.quantity , product._id)} class="btn btn-primary mt-4">Delivered</button>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-control">
                                        <div class="input-group">
                                            <input c {...register("quantity")} type="number" placeholder="Type Quantity" class="input input-bordered mt-4" />
                                            <button class="btn btn-primary mt-4">Submit</button>
                                        </div>
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