import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (product) => {
    const {_id,img , name , price , quantity , date, supplyer, meter} = product.product
    console.log(product)
    const navigate = useNavigate();
    const navigateToProductInfo = id =>{
        navigate(`/product/${id}`)

    }
    return (
        <div data-aos="zoom-in-down" data-aos-duration="1500" className='mt-4 mb-4'>
            <div className=' border-solid border-2 rounded-md   '>
                <div data-theme = "autumn"  className="card card-compact  w-80  shadow-xl ">
                    <figure><img className='w-80' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-rose-800">{name}</h2>
                        <ol className=''>
                            <li className='font-bold'>Price : {price}Tk</li>
                            <li className='font-bold'>Quantity : {quantity == 0 ?  <span className='text-red-800'>Stock Out</span> : quantity}{quantity ? meter : <></>}</li>
                            <li className='font-bold'>Supplier Name : {supplyer}</li>
                            <li className='font-bold'>EXP Date : {date}</li>
                            
                        </ol>
                        <div className="card-actions justify-end">
                            <button onClick={()=> navigateToProductInfo(_id)} className="btn btn-primary ">Stock Update</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Product;