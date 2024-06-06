import { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import { SiBookmyshow, SiGoogleclassroom } from "react-icons/si";
import { MdFlightClass } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiHistory, BiSelectMultiple } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useUsers from "../hooks/useUsers";
import useUser from "../hooks/UseUser";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isUser] = useUser();
  const [users, loading, refetch] = useUsers();
  const { user } = useAuth();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      condition: isAdmin,
      links: [
        {
          to: "/dashboard/manageClasses",
          label: "Manage Classes",
          icon: <MdFlightClass />,
        },
        {
          to: "/dashboard/manageUsers",
          label: "Manage Users",
          icon: <FaUserShield />,
        },
      ],
    },
    {
      condition: isUser,
      links: [
        {
          to: "/dashboard/mySelectedClasses",
          label: "My Selected Classes",
          icon: <BiSelectMultiple />,
        },
        {
          to: "/dashboard/myEnrolledClasses",
          label: "My Enrolled Classes",
          icon: <SiGoogleclassroom />,
        },
        {
          to: "/dashboard/paymentHistory",
          label: "Payment History",
          icon: <BiHistory />,
        },
      ],
    },
    {
      condition: isInstructor,
      links: [
        {
          to: "/dashboard/addAClass",
          label: "Add a Class",
          icon: <AiOutlineAppstoreAdd />,
        },
        {
          to: "/dashboard/myClasses",
          label: "My Classes",
          icon: <SiBookmyshow />,
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Dashboard</title>
      </Helmet>

      {/* Sidebar for Desktop and Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-white shadow-lg transform lg:block lg:w-64 transition-transform duration-300 ease-in-out ${
          isSidebarVisible
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between p-4">
            <div className="text-xl font-semibold">My Dashboard</div>
            {/* <button
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 "
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
              {isSidebarVisible ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button> */}
          </div>
          <div className="overflow-y-auto flex-1">
            <div className="text-center flex flex-col items-center p-4">
              <img
                className="w-14 h-14 rounded-full mb-2"
                src={user?.photoURL}
                alt="User"
              />
              <h3 className="font-medium text-lg text-gray-900">
                {user?.displayName}
              </h3>
              <p className="text-sm text-gray-500">Email: {user?.email}</p>
              <hr className="border-gray-300 w-full mt-4" />
            </div>
            <nav className=" px-2 py-4 bg-gray-50 shadow-md rounded-lg">
              {menuItems.map(
                (menu, index) =>
                  menu.condition &&
                  menu.links.map((link) => (
                    <li
                      key={link.to}
                      className={`flex items-center p-3 space-x-4 rounded-lg transition duration-200 ease-in-out transform hover:bg-gray-100 hover:shadow ${
                        location.pathname === link.to
                          ? "bg-blue-100 text-blue-700 border-l-4 border-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      <Link
                        to={link.to}
                        className="flex items-center space-x-3"
                      >
                        <span className="text-2xl">{link.icon}</span>
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    </li>
                  ))
              )}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`flex-1 p-6 overflow-auto lg:ml-64
        `}
      >
        <Outlet />
      </main>

      {/* Toggle Button for md and sm devices */}
      <button
        className="fixed top-4 right-4 z-30 p-3 bg-blue-600 text-white rounded-full shadow-lg lg:hidden"
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Dashboard;
