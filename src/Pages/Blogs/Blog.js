import React from 'react';

const Blog = (blog) => {
    console.log(blog)
    const { img, text, title } = blog.blog
    return (
        <div data-theme = "autumn" className=''>
             <br/>
            <br/>
            <br/>
            <br/>
            <div class="card h-80 w-96 bg-base-100 shadow-xl image-full">
                <figure className='transition duration-0 hover:duration-150 transition duration-700 ease-in-out'><img  src={img} alt="Shoes" /></figure>
                <div class="card-body text-green-900">
                    <h2 class="card-title text-white  text-5xl">{title}</h2>
                    <p className='text-white'>{text}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary ">See Details</button>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Blog;