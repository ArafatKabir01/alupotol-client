import React from 'react';


const Banner = () => {
    return (
        <div className='container m-auto' data-theme="" >
           
            <div style={{height : "900px "}} class="carousel  w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/assortment-vegetables-wooden-box_144627-45292.jpg?w=1380&t=st=1661870847~exp=1661871447~hmac=0f077cd20938369d6fd66efb0623f9649ddbe61d418358d669f93e4b73995328" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/composition-with-vegetables-fruits-wicker-basket-isolated_135427-2733.jpg?w=1380" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img  src="https://img.freepik.com/free-photo/pile-fresh-fruits_144627-17253.jpg?w=1380&t=st=1661870704~exp=1661871304~hmac=39d919e4647b175ca856d46231ebac79aa9236b95291b4c8ef59061a47363e49" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Banner;