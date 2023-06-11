import { Helmet } from "react-helmet-async";

import CardComponent from "./CardComponent";
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
      <PopularInstructors></PopularInstructors>

      <PopularClasses></PopularClasses>

      <JoinOurClass></JoinOurClass>
      <CardComponent></CardComponent>
    </div>
  );
};

export default Home;
