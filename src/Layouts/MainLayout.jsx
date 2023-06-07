import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
