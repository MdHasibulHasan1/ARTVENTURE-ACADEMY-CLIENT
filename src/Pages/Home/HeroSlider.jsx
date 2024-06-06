import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SingleHeroSlider from "./SingleHeroSlider";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HeroSlider = () => {
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
    <section className="main-slider mt-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        className="relative group"
        navigation={{
          nextEl: ".button-prev-slide",
          prevEl: ".button-next-slide",
        }}
        modules={[Navigation]}
      >
        {summerCampData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="relative">
              <div className="grid md:grid-cols-2 md:mx-12">
                <div className="hidden md:block"></div>
                <img
                  className="rounded-[50%] lg:h-[80vh] h-screen object-cover"
                  src={slider?.imageUrl}
                  alt=""
                />
              </div>
              <div className="content grid md:grid-cols-2 items-center place-items-center absolute top-[15%] md:top-[20%] lg:top-[25%] md:mx-12 mx-10">
                <div>
                  <div className="bg-white p-2 bg-opacity-40 md:bg-opacity-0">
                    <h4 className="text-base">More Lucky and trending</h4>
                    <h3 className="text-5xl text-[#ff7703] my-2">
                      {slider.title}
                    </h3>
                    <p className="text-sm">{slider.description}</p>
                    <button className="px-7 my-2 bg-[#ff7703] text-xs text-white p-2">
                      Shop Now
                    </button>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
            </div>

            {/* <SingleHeroSlider slider={slider} /> */}
          </SwiperSlide>
        ))}
        <div className="top-[50%] absolute z-10 button-next-slide md:w-10 md:h-10 grid place-items-center text-white bg-black group-hover:left-0 p-1 md:p-0 -left-[23rem] duration-500 rounded-full">
          <FaArrowLeft />
        </div>
        <div className=" top-[50%] absolute z-10 button-prev-slide p-1 md:p-0  md:w-10 md:h-10 grid place-items-center text-white bg-black group-hover:right-0 -right-[23rem] duration-500 rounded-full">
          {" "}
          <FaArrowRight />
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
