import { Helmet } from "react-helmet-async";
import SliderComponent from "./SliderComponent";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>App Name | Home</title>
      </Helmet>
      This is a Home page
      <SliderComponent></SliderComponent>
    </div>
  );
};

export default Home;
