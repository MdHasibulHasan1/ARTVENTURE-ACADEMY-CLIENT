import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const summerCampData = [
    {
      id: 1,
      title: "Welcome to Art & Craft Summer Camp!",
      description:
        "Join us for a fun-filled summer of creativity and imagination. Our Art & Craft School offers a wide range of exciting activities for students to explore and express their artistic talents.",
      imageUrl:
        "https://i.ibb.co/zmPVmbB/boy-scout-members-having-fun-nature-52683-90494.jpg",
    },
    {
      id: 2,
      title: "Enroll in our Creative Workshops",
      description:
        "Discover the joy of painting, drawing, sculpting, and more! Our creative workshops are designed to inspire and nurture young artists. Learn from experienced instructors and explore various art techniques.",
      imageUrl:
        "https://i.ibb.co/7YBbYDr/daily-lifestyle-caucasian-family-shoot-53876-42827.jpg",
    },
    {
      id: 3,
      title: "Explore Different Art Mediums",
      description:
        "Dive into the world of different art mediums, including acrylics, watercolors, pastels, and clay. Experiment with textures, colors, and forms as you bring your imagination to life through various artistic mediums.",
      imageUrl:
        "https://i.ibb.co/7SfbJf1/mosaic-puzzle-art-kids-children-s-creative-game-hands-are-playing-mosaic-table-colorful-multi-colore.jpg",
    },
    {
      id: 4,
      title: "Develop Your Artistic Skills",
      description:
        "Whether you are a beginner or have some experience, our Art & Craft School is the perfect place to enhance your artistic skills. From basic techniques to advanced concepts, our instructors will guide you every step of the way.",
      imageUrl:
        "https://i.ibb.co/q1MgnLp/two-little-girl-painter-art-drawing-park.jpg",
    },
    {
      id: 5,
      title: "Create Masterpieces",
      description:
        "Unleash your creativity and create stunning artworks. Gain confidence as you produce your very own masterpieces, learn composition, explore different styles, and showcase your unique artistic voice.",
      imageUrl:
        "https://i.ibb.co/q5zcfq8/close-up-children-painting-together-23-2149027437.jpg",
    },
    {
      id: 6,
      title: "Join a Vibrant Community",
      description:
        "Connect with fellow art enthusiasts and be part of a vibrant community. Share ideas, collaborate on projects, and engage in creative discussions. Make lifelong friendships and create memories that will last a lifetime.",
      imageUrl:
        "https://img.freepik.com/free-vector/art-school-banner-with-boy-drawing-canvas_107791-9436.jpg?w=900&t=st=1686330886~exp=1686331486~hmac=6c4e436d419b01b1b5c39e1f1f0ca3b58756aa23dfdfc19a0adaf74366a86ebb",
    },
  ];
  return (
    <div className="  mx-auto rounded-2xl  ">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {summerCampData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="relative ">
              <img
                className="w-full h-screen object-cover"
                src={slider?.imageUrl}
                alt=""
              />
              <div className="bg-red-500 w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-opacity-50"></div>
              {/*  <div className="carousel-overlay flex items-end mb-10">
                <div className="carousel-text text-white bg-opacity-70 bg-gray-900 hover:bg-opacity-100 p-5 rounded-lg">
                  <h1 className="text-3xl text-yellow-500   md:text-4xl tracking-[4px] uppercase font-bold mb-4">
                    {slider.title}
                  </h1>
                  <p className="text-md font-thin">{slider.description}</p>
                </div>
              </div> */}
              <div className="carousel-text absolute top-[25%] right-[15%] md:right-[25%] md:left-[25%] left-[15%] text-gray-900 bg-opacity-30 bg-[#fff] p-1 rounded-lg">
                <div className="bg-white text-center p-1 bg-opacity-40 md:bg-opacity-0 ">
                  <h3 className=" mb-5 text-3xl md:text-5xl font-bold text-black">
                    {slider.title}
                  </h3>
                  <p className="text-sm lg:text-base">{slider.description}</p>
                  {/*  <button className="px-4 my-2  uppercase text-xs btn bg-gray-900 hover:bg-gray-900 text-white p-2">
                    Shop Now
                  </button> */}
                  <Link to="/classes">
                    <button className="btn btn-neutral mt-2">Shop Now</button>
                  </Link>
                </div>{" "}
              </div>
            </div>
            {/* <SingleHeroSlider slider={slider} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
