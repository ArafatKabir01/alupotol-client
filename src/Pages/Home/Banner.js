import React from 'react';


const Banner = () => {
    return (
        <div className=' m-auto' data-theme="" >
            <div className="hero  ">
  <div className="hero-content  text-center">
    <div className="w-96 md:w-9/12 lg:w-screen  ">
        <br/> <br/>
    <div  className="carousel   w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/assortment-vegetables-wooden-box_144627-45292.jpg?w=1380&t=st=1661870847~exp=1661871447~hmac=0f077cd20938369d6fd66efb0623f9649ddbe61d418358d669f93e4b73995328" className="w-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/composition-with-vegetables-fruits-wicker-basket-isolated_135427-2733.jpg?w=1380" className="w-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img  src="https://img.freepik.com/free-photo/pile-fresh-fruits_144627-17253.jpg?w=1380&t=st=1661870704~exp=1661871304~hmac=39d919e4647b175ca856d46231ebac79aa9236b95291b4c8ef59061a47363e49" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;