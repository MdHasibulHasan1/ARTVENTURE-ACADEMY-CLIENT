import React from "react";

const SliderComponent = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            className="w-full h-[calc(100vh-80px)] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn  z-10 btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn  z-10 btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            className="w-full h-[calc(100vh-80px)] object-cover"
          />
          <div className="absolute h-[calc(100vh-80px)] z-0 flex items-center  my-auto text-slate-100">
            <p>
              fgdgdgfhg Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Commodi ipsum in et delectus debitis reprehenderit. Impedit
              voluptatem ex nulla eveniet dignissimos eius voluptate harum quod
              quos? Voluptate aut quaerat iusto. fgdgdgfhg Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Commodi ipsum in et
              delectus debitis reprehenderit. Impedit voluptatem ex nulla
              eveniet dignissimos eius voluptate harum quod quos? Voluptate aut
              quaerat iusto.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn  z-10 btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn  z-10 btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            className="w-full h-[calc(100vh-80px)] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn  z-10 btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn  z-10 btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            className="w-full h-[calc(100vh-80px)] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn  z-10 btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn  z-10 btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
