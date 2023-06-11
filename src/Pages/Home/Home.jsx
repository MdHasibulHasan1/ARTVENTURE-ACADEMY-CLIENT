import { Helmet } from "react-helmet-async";
import JoinOurClass from "./JoinOurClass";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import SliderComponent from "./SliderComponent";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ARTVENTURE ACADEMY | Home</title>
      </Helmet>
      <SliderComponent></SliderComponent>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>

      <JoinOurClass></JoinOurClass>
    </div>
  );
};

export default Home;
