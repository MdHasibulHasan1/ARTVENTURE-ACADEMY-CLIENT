/* import React from "react";

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
          <div className="absolute text-red-800 left-1/4 right-1/4 h-[calc(100vh-80px)] text-center z-0 flex items-center  my-auto">
            <h1>Art & Craft Summer Camp</h1> <br />
            <p>
              Unleash your creativity and join our exciting summer camp filled
              with art and craft activities.
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

export default SliderComponent; */

import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      <div className="slide">
        <img src="your-image-url-1" alt="Image 1" />
        <div className="caption">Caption 1</div>
      </div>
      <div className="slide">
        <img src="your-image-url-2" alt="Image 2" />
        <div className="caption">Caption 2</div>
      </div>
      <div className="slide">
        <img src="your-image-url-3" alt="Image 3" />
        <div className="caption">Caption 3</div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
