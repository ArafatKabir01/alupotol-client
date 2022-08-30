import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{backgroundImage : 'url(https://cdn1.vectorstock.com/i/1000x1000/32/10/fruits-background-vector-1273210.jpg)'}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">404 Page Not Found</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;