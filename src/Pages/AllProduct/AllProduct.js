import React, { useEffect, useState } from 'react';

import {useNavigate } from 'react-router-dom';

const AllProduct = () => {
    const [products, setProducts] = useState([])
    const [seacrchText , setSearchText] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://warehouse-management-ukio.onrender.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://warehouse-management-ukio.onrender.com/product/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })

        }
    }
   

   const handleUpdate = id =>{
    navigate(`/product/update/${id}`)

        }

    const handleSearch = event =>{
        setSearchText(event.target.value)
    }
    return (
        <div data-theme="autumn" className='container z-1 m-auto w-96 md:w-full lg:w-full'>
            <br />
            <br />
            <br />
            <br />
            <div>
                <div className="overflow-x-auto w-full ">
                    <table className="table w-full ">
                        <div className="overflow-x-auto ">
                            <table className="table w-full  ">
                                <thead  className='md:z-0' >
                                    <tr>  
                                        <th></th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th><div className="form-control">
                                            <div className="input-group">
                                                <input onChange={handleSearch} type="text" placeholder="Search…" className="input input-bordered" />
                                                <button className="btn btn-square">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                                </button>
                                            </div>
                                        </div></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                {
                                    products.filter(value =>{
                                        if(seacrchText === "" ){
                                            return value;
                                        }else if(value.name.toLowerCase().includes(seacrchText.toLowerCase())){
                                            return value 
                                            
                                        }
                                              
                                    }).map(v => {
                                    
                                    return (<>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <div className="flex items-center  space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={v.img} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{v.name}</div>
                                                            <div className="text-sm opacity-50">{v.supplyer}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {v.quantity}

                                                </td>
                                                <td>{v.price}$</td>
                                                <th>
                                                    <button onClick={() => handleDelete(v._id)} className="btn btn-ghost btn-xs">Delete</button>
                                                
                                                        <label onClick={()=>handleUpdate(v._id)} htmlFor="my-modal-6" className="btn btn-ghost btn-xs">Update</label>                                               
                                                </th>
                                                
                                            </tr>
                                        </tbody>
                                    </>
                                    )})}



                            </table>
                        </div>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllProduct;