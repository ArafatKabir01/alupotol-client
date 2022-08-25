import React from 'react';

const Product = (product) => {
    const {img , name} = product.product
    console.log(product)
    return (
        <div className=''>
            <div className=' '>
                <div class="card card-compact w-80 bg-base-100 shadow-xl ">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Product;