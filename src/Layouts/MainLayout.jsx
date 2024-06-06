import { Outlet, useNavigation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Spinner from "../Pages/Shared/Spinner";
import Sidebar from "../Pages/Shared/Navbar/Sidebar";

const MainLayout = () => {
  const navigation = useNavigation();

  const { loading } = useAuth();
  return (
    <div className="bg-[#eeeeee]">
      <div>{navigation.state == "loading" && <Spinner></Spinner>}</div>

      {/* <Sidebar /> */}
      <Navbar />
      <div className="pt-14">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
