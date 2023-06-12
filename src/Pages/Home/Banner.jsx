import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

const Banner = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const summerCampData = [
    {
      title: "Welcome to Art & Craft Summer Camp!",
      description:
        "Join us for a fun-filled summer of creativity and imagination. Our Art & Craft School offers a wide range of exciting activities for students to explore and express their artistic talents.",
      imageUrl:
        "https://i.ibb.co/zmPVmbB/boy-scout-members-having-fun-nature-52683-90494.jpg",
    },
    {
      title: "Enroll in our Creative Workshops",
      description:
        "Discover the joy of painting, drawing, sculpting, and more! Our creative workshops are designed to inspire and nurture young artists. Learn from experienced instructors and explore various art techniques.",
      imageUrl:
        "https://i.ibb.co/7YBbYDr/daily-lifestyle-caucasian-family-shoot-53876-42827.jpg",
    },
    {
      title: "Explore Different Art Mediums",
      description:
        "Dive into the world of different art mediums, including acrylics, watercolors, pastels, and clay. Experiment with textures, colors, and forms as you bring your imagination to life through various artistic mediums.",
      imageUrl:
        "https://i.ibb.co/7SfbJf1/mosaic-puzzle-art-kids-children-s-creative-game-hands-are-playing-mosaic-table-colorful-multi-colore.jpg",
    },
    {
      title: "Develop Your Artistic Skills",
      description:
        "Whether you are a beginner or have some experience, our Art & Craft School is the perfect place to enhance your artistic skills. From basic techniques to advanced concepts, our instructors will guide you every step of the way.",
      imageUrl:
        "https://i.ibb.co/q1MgnLp/two-little-girl-painter-art-drawing-park.jpg",
    },
    {
      title: "Create Masterpieces",
      description:
        "Unleash your creativity and create stunning artworks. Gain confidence as you produce your very own masterpieces, learn composition, explore different styles, and showcase your unique artistic voice.",
      imageUrl:
        "https://i.ibb.co/q5zcfq8/close-up-children-painting-together-23-2149027437.jpg",
    },
    {
      title: "Join a Vibrant Community",
      description:
        "Connect with fellow art enthusiasts and be part of a vibrant community. Share ideas, collaborate on projects, and engage in creative discussions. Make lifelong friendships and create memories that will last a lifetime.",
      imageUrl:
        "https://img.freepik.com/free-vector/art-school-banner-with-boy-drawing-canvas_107791-9436.jpg?w=900&t=st=1686330886~exp=1686331486~hmac=6c4e436d419b01b1b5c39e1f1f0ca3b58756aa23dfdfc19a0adaf74366a86ebb",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <Carousel showThumbs={false} selectedItem={activeImageIndex}>
        {summerCampData.map((data, index) => (
          <div
            key={index}
            className="slide relative hover:bg-opacity-80 bg-red-500 bg-cover bg-no-repeat bg-blend-overlay bg-opacity-50  bg-center bg-fixed flex flex-col items-center justify-center py-20"
            style={{ backgroundImage: `url(${data.imageUrl})` }}
          >
            <div className="carousel-overlay flex items-end mb-10">
              <div className="carousel-text text-black bg-gray-500 bg-opacity-5">
                <h1 className="text-3xl text-yellow-500   md:text-4xl tracking-[4px] uppercase font-bold mb-4">
                  {data.title}
                </h1>
                <p className="text-lg  font-serif">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
