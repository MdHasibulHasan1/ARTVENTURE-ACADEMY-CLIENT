import React from "react";

const Banner2 = () => {
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
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/zmPVmbB/boy-scout-members-having-fun-nature-52683-90494.jpg"
          className="w-full h-screen"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/7YBbYDr/daily-lifestyle-caucasian-family-shoot-53876-42827.jpg"
          className="w-full h-screen"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/7SfbJf1/mosaic-puzzle-art-kids-children-s-creative-game-hands-are-playing-mosaic-table-colorful-multi-colore.jpg"
          className="w-full h-screen"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/q1MgnLp/two-little-girl-painter-art-drawing-park.jpg"
          className="w-full h-screen"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
