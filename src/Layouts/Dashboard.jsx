import { FaUserShield, FaRegAddressBook } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useUsers from "../hooks/useUsers";
import { SiBookmyshow, SiGoogleclassroom } from "react-icons/si";
import { MdFlightClass, MdPayment } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiHistory, BiSelectMultiple } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import useUser from "../hooks/UseUser";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isUser] = useUser();
  const [users, loading, refetch] = useUsers();
  console.log("check", isAdmin, isInstructor, isUser);
  // const isAdmin = { role: "admin" };
  return (
    <div className="drawer lg:drawer-open ">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col items-center ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-gray-200">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}
          {isAdmin && (
            <>
              <div className="py-1 text-lg text-black font-medium flex">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black  border-b-black border-2 pb-1"
                      : "text-gray-500"
                  }
                  to="/dashboard/manageClasses"
                >
                  <div className="flex items-center gap-1">
                    <SiGoogleclassroom></SiGoogleclassroom>
                    Manage Classes
                  </div>
                </NavLink>
              </div>
              <div className="py-1 text-lg text-black font-medium flex">
                <NavLink
                  to="/dashboard/manageUsers"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black  border-b-black border-2 pb-1"
                      : "text-[#666666] "
                  }
                >
                  <div className="flex items-center gap-1">
                    <FaUserShield className=""></FaUserShield>
                    Manage Users
                  </div>
                </NavLink>
              </div>
            </>
          )}
          {isUser && (
            <>
              <div className="py-1 text-lg  font-medium flex">
                <NavLink
                  to="/dashboard/mySelectedClasses"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black border-b-black border-2 pb-1"
                      : "text-[#666666]"
                  }
                >
                  <div className="flex items-center gap-1">
                    <BiSelectMultiple></BiSelectMultiple>
                    My Selected Classes:
                  </div>
                </NavLink>
              </div>
              <div className="py-1 text-lg font-medium flex">
                <NavLink
                  to="/dashboard/myEnrolledClasses"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black border-b-black border-2 pb-1"
                      : "text-[#666666]"
                  }
                >
                  <div className="flex items-center gap-1">
                    <SiBookmyshow></SiBookmyshow>
                    My Enrolled Classes
                  </div>
                </NavLink>
              </div>
              <div className="py-1 text-lg font-medium flex">
                <NavLink
                  to="/dashboard/payment"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black border-b-black border-2 pb-1"
                      : "text-[#666666]"
                  }
                >
                  <div className="flex items-center gap-1">
                    <MdPayment></MdPayment>
                    payment
                  </div>
                </NavLink>
              </div>
              <div className="py-1 text-lg font-medium flex">
                <NavLink
                  to={`paymentHistory`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black border-b-black border-2 pb-1"
                      : "text-[#666666]"
                  }
                >
                  <div className="flex items-center gap-1">
                    <BiHistory></BiHistory>
                    Payment History
                  </div>
                </NavLink>
              </div>
            </>
          )}
          {isInstructor && (
            <>
              <div className="py-1 text-lg font-medium flex">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black border-b-black border-2 pb-1 "
                      : "text-[#666666] "
                  }
                  to="/dashboard/addAClass"
                >
                  <div className="flex items-center gap-1">
                    <AiOutlineAppstoreAdd />
                    Add a Class
                  </div>
                </NavLink>
              </div>

              <div className="py-1 text-lg font-medium flex">
                <NavLink
                  to="/dashboard/myClasses"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black border-b-black border-2 pb-1"
                      : "text-[#666666]"
                  }
                >
                  <div className="flex items-center gap-1">
                    <MdFlightClass />
                    My Classes
                  </div>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
