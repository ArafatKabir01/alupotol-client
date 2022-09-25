import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import Product from './Product';

const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://rocky-oasis-35622.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    if(!products){
        return <Loading></Loading>
    }
    return (
        <div className=' m-auto'>
            <br/>
            <br/>
            
            <div className='flex justify-evenly items-center '>
            
                <div data-aos="fade-right" data-aos-duration="1500" className='bg-red-700 h-2 w-80 ' ></div>
                <div><h2 className='text-center text-4xl text-lime-800 block w-80 pb-4 font-bold'>ALL PRODUCTS</h2></div>
                <div data-aos="fade-left" data-aos-duration="1500" className='bg-red-700 h-2 w-80 '></div>
            </div>
            
            <br/>
            
            <div className='flex flex-wrap mt-8  justify-center gap-8'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            
            <button className="btn btn-xs float-right	me-5 mt-4">See All</button>
            <br/>
            <br/>
            <br/>
            <br/>


        </div>
    );
};

export default Products;