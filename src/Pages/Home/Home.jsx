import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

import CardComponent from "./CardComponent";
import JoinOurClass from "./JoinOurClass";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ARTVENTURE ACADEMY | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularInstructors></PopularInstructors>
      <PopularClasses></PopularClasses>
      <JoinOurClass></JoinOurClass>
      <CardComponent></CardComponent>
    </div>
  );
};

export default Home;
