import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
// import Banner2 from "./Banner2";
import CardComponent from "./CardComponent";
import JoinOurClass from "./JoinOurClass";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import HeroSlider from "./HeroSlider";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import Sidebar from "../Shared/Navbar/Sidebar";
import { useState } from "react";

const Home = () => {
  const [range, setRange] = useState(50);

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };
  return (
    <div className="">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Home</title>
      </Helmet>

      {/* <Banner></Banner> */}
      {/* <HeroSlider /> */}

      {/* <Hero /> */}
      {/*   <div class="w-full mx-auto">
        <div class="flex flex-wrap justify-start p-8">
          <div class="w-full md:w-1/3 lg:w-1/4 mb-8 px-4">
            <a
              href="#"
              class="block bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 transform hover:text-white hover:bg-yellow-500 relative animate-scale"
            >
              <div class="bg-yellow-500 h-32 w-32 rounded-full absolute top-0 -right-96"></div>
              <div class="py-5 px-4">
                <div class="font-bold text-2xl text-white">
                  UI/Web &amp; Graph Design for teenagers 11-17 years old
                </div>
                <div class="text-white text-base mt-4">
                  Start:
                  <span class="font-bold text-yellow-500">04.11.2022</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
 */}
      <ImageSlider />
      {/* <Banner2 /> */}
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>

      <JoinOurClass></JoinOurClass>
      <CardComponent></CardComponent>
    </div>
  );
};

export default Home;
