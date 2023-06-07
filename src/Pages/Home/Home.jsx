import { Helmet } from "react-helmet-async";
import AddAClass from "../Deshboard/AddAClass/AddAClass";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>App Name | Home</title>
      </Helmet>
      This is a Home page
      <Slider></Slider>
      <AddAClass></AddAClass>
    </div>
  );
};

export default Home;
