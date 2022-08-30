import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div dara-theme = "autumn" className='container m-auto'>
            <br/>
            <br/>
            <h2 className='text-center text-6xl text-lime-800 mt-5 mb-8	'>All Products</h2>
            <hr className='border-lime-700'></hr>
            <br/>
            <div className='flex flex-wrap  justify-center gap-8'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            
            <button class="btn btn-xs float-right	me-5 mt-4">See All</button>
            <br/>
            <br/>
            <br/>
            <br/>


        </div>
    );
};

export default Products;