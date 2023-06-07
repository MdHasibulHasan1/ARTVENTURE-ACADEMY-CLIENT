import { Helmet } from "react-helmet-async";

import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>App Name | Home</title>
      </Helmet>
      This is a Home page
      <Slider></Slider>
    </div>
  );
};

export default Home;
