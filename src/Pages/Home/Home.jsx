import { Helmet } from "react-helmet-async";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import SliderComponent from "./SliderComponent";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>App Name | Home</title>
      </Helmet>
      <SliderComponent></SliderComponent>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
