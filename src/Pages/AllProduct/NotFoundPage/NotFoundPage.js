import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage : 'url(https://cdn1.vectorstock.com/i/1000x1000/32/10/fruits-background-vector-1273210.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">404 Page Not Found</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;