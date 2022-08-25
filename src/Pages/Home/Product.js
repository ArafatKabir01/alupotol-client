import React from 'react';

const Product = (product) => {
    const {img , name , price , quantity , date, supplyer, meter} = product.product
    console.log(product)
    return (
        <div className=''>
            <div className=' '>
                <div class="card card-compact w-80 bg-base-100 shadow-xl ">
                    <figure><img className='w-80' src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <ol className=''>
                            <li className='font-bold'>Price : {price}Tk</li>
                            <li className='font-bold'>Quantity : {quantity}{meter}</li>
                            <li className='font-bold'>Supplyer Name : {supplyer}</li>
                            <li className='font-bold'>EXP Date : {date}</li>
                            
                        </ol>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary ">Stock Update</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Product;