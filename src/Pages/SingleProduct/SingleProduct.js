import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./SingleProduct.css";

// import required modules
import { FreeMode, Pagination } from "swiper";


const SingleProduct = () => {
    let { id } = useParams()
    const [products, setProducts] = useState([])
    console.log(id)
    const [error, setError] = useState("")
     const { data:allProducts, isLoading, refetch } =  useQuery('allProducts', () => fetch(`https://rocky-oasis-35622.herokuapp.com/product/${id}`, {
        method: 'GET',
        headers:{
            'content-type' : 'application/json'
        }
    }).then(res => res.json()));
   
    if(isLoading){
        <Loading></Loading>
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        if(data.quantity === ""){
            setError ("Please set your quantity")
            console.log("error")
            
        }else if(parseFloat(data.quantity) <= 0){
            setError("please Set Quentity More Then 0")

        } 
        else{
            
            fetch(`https://rocky-oasis-35622.herokuapp.com/product/${id}`,{
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
            const url1 = `https://rocky-oasis-35622.herokuapp.com/deliveredproduct/${id}`
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

        const navigate = useNavigate();
        const navigateToProductInfo = id =>{
            navigate(`/product/update/${id}`)
        }
        useEffect(() => {
            fetch('https://rocky-oasis-35622.herokuapp.com/allProducts')
                .then(res => res.json())
                .then(data => setProducts(data))
                
        }, [allProducts])

    return (
        <div className='container m-auto'>
                <div className="mt-20 min-h-96">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={allProducts?.img} className="w-48 md:w-96 lg:w-5/12 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold text-rose-800">{allProducts?.name}</h1>
                            <ol className='mt-6'>
                                <li className='font-bold'>Price : {allProducts?.price}Tk</li>
                                <li className='font-bold'>Quantity : {allProducts?.quantity}{allProducts?.meter}</li>
                                <li className='font-bold'>Supplier Name : {allProducts?.supplyer}</li>
                                <li className='font-bold'>EXP Date : {allProducts?.date}</li>

                            </ol>
                            <div  className='flex items-center gap-4'>
                                <button data-theme = "autumn" onClick={()=>hadleDelivered(allProducts?.quantity , allProducts?._id)} className="btn btn-primary mt-4">Delivered</button>
                                <form  onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <div className="input-group ">
                                            <input  {...register("quantity")} type="number" placeholder="Type Quantity" className="w-20 input input-bordered mt-4" />
                                            <button data-theme = "autumn" className="btn btn-primary mt-4">Submit</button>
                                        </div>
                                        <p className='text-red-800'>{error}</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:hidden lg:block mt-8'>  
                <h2 className='text-center text-4xl text-lime-800 mt-5 mb-8	'>Products Need To Update Stock</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="QSwiper"
      >
        {products.filter(value =>{
                                    if(value.quantity < 2){
                                        return value;
                                    }       
                                }).map( value => {
                              
                              return <SwiperSlide ><div className=' border-solid border-2 rounded-md'>
                                <div  data-theme = "autumn" className="card card-compact w-32 md:w-48 lg:w-72 shadow-xl ">
                                    <figure><img className='w-80' src={value.img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                <h2 className="card-title text-rose-800">{value.name}</h2>
                                <ol className=''>
                                    <li className='font-bold'>Price : {value.price}Tk</li>
                                    <li className='font-bold'>Quantity : {value.quantity == 0 ?  <span className='text-red-800'>Stock Out</span> : value.quantity}{value.quantity ? value.meter : <></>}</li>
                                    <li className='font-bold'>Supplier Name : {value.supplyer}</li>
                                    <li className='font-bold'>EXP Date : {value.date}</li>
                                    
                                </ol>
                                <div className="card-actions justify-end">
                                    <button onClick={()=> navigateToProductInfo(value._id)} className="btn btn-primary btn-sm">Stock Update</button>
                                </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>})}
      </Swiper>
    </div>
        </div>
    );
};

export default SingleProduct;