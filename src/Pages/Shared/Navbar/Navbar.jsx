import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import {
  FaHome,
  FaChalkboardTeacher,
  FaBook,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const { logOut, user, setLoading } = useAuth();

  const handleLoading = () => {
    if (!user) {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <div
      className={`fixed z-30 w-full py-4 px-4 transition-colors duration-300 uppercase text-lg ${
        theme === "dark"
          ? "bg-[#1d232a] text-gray-200"
          : "bg-gray-200 text-gray-900"
      } shadow-md`}
    >
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-full h-10"
            src="artventure.png"
            alt="Artventure Academy"
          />
          <span
            className={`text-xl font-bold ${
              theme === "dark" ? "text-orange-500" : "text-red-500"
            }`}
          >
            Academy
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500  font-bold bg-gray-100 rounded-lg px-2 py-1"
                : "text-gray-600 hover:text-orange-500 transition font-bold duration-300"
            }
          >
            {/* <FaHome className="inline-block" />  */}
            Home
          </NavLink>
          <NavLink
            to="/instructors"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500 font-bold bg-gray-100 rounded-lg px-2 py-1"
                : "text-gray-600 hover:text-orange-500 transition font-bold duration-300"
            }
          >
            {/* <FaChalkboardTeacher className="inline-block mr-2" />  */}
            Instructors
          </NavLink>
          <NavLink
            to="/classes"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500 font-bold bg-gray-100 rounded-lg px-2 py-1"
                : "text-gray-600 hover:text-orange-500 font-bold transition duration-300"
            }
          >
            {/* <FaBook className="inline-block mr-2" />  */}
            Classes
          </NavLink>
          <NavLink
            to="/dashboard"
            onClick={handleLoading}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500 font-bold bg-gray-100 rounded-lg px-2 py-1"
                : "text-gray-600 hover:text-orange-500 font-bold transition duration-300"
            }
          >
            {/* <FaUser className="inline-block mr-2" /> */}
            Dashboard
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative">
              <img
                onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
                className="w-8 h-8 rounded-full cursor-pointer"
                src={user.photoURL || "https://i.ibb.co/LYS7q2X/user.png"}
                alt="User Avatar"
              />
              {isProfileMenuOpen && (
                <ul className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/updateProfile">Profile</Link>
                  </li>
                  <li className="px-4 py-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden"
                        onChange={handleTheme}
                      />
                      <span className="mr-2 whitespace-nowrap">
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                      </span>
                      <div className="w-10 h-6 bg-gray-400 rounded-full flex items-center p-1">
                        <div
                          className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
                            theme === "dark" ? "translate-x-4" : ""
                          }`}
                        ></div>
                      </div>
                    </label>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <NavLink onClick={handleLogout} to="/">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-b-2 border-orange-500 font-bold bg-gray-100 rounded-lg px-2 py-1"
                  : "text-gray-600 font-bold hover:text-orange-500 transition duration-300"
              }
            >
              Login
            </NavLink>
          )}

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414L11.414 11l2.293 2.293a1 1 0 01-1.414 1.414L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 11 6.293 8.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <nav>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500 font-bold bg-gray-100 rounded-lg px-2 py-1"
                      : "text-gray-600 hover:text-orange-500 transition duration-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500 font-bold bg-gray-100 rounded-lg px-2 py-1"
                      : "text-gray-600 hover:text-orange-500 transition duration-300"
                  }
                >
                  Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500 font-bold bg-gray-100 rounded-lg px-2 py-1"
                      : "text-gray-600 hover:text-orange-500 transition duration-300"
                  }
                >
                  Classes
                </NavLink>
              </li>
              <li onClick={handleLoading}>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500 font-bold bg-gray-100 rounded-lg px-2 py-1"
                      : "text-gray-600 hover:text-orange-500 transition duration-300"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
