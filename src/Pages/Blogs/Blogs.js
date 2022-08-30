import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allBlog')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='container m-auto flex flex-wrap  justify-center gap-8'>
           
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;