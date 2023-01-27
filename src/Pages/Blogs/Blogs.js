import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    useEffect(()=>{
        fetch('https://warehouse-management-ukio.onrender.com/allBlog')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='container m-auto '>
            <h2 className='text-5xl container mb-8 mt-32'>Featured Blogs</h2>
            <div className='container m-auto flex flex-wrap mb-64  justify-center gap-8'>
            
           
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
            
        </div>
        </div>
        
    );
};

export default Blogs;