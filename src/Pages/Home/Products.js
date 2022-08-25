import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div className='container m-auto'>
            <h2 className='text-center text-6xl text-sky-800 mt-5 mb-8	'>All Product</h2>
            <div className='flex flex-wrap  justify-center gap-8'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <button class="btn btn-xs float-right	">See All</button>


        </div>
    );
};

export default Products;