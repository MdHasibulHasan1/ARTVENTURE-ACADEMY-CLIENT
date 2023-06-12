import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="">
      <div>{navigation.state === "loading" && <Spinner></Spinner>}</div>

      <Navbar></Navbar>
      <div className="pt-20">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
