import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Navbar.css";

import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <div className="navbar h-20  bg-[#ffffff] text-[#666666] uppercase font-semibold fixed top-0 z-51">
        {/* Left side of the navbar */}
        <div className="navbar-start flex items-center">
          {/* Dropdown menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              {/* Menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* Dropdown menu content */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* Navigation links */}
              <li tabIndex={0}>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? "text-[#3a85eb]" : "text-[#666666]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  aria-label="Instructors"
                  title="Instructors"
                  className={({ isActive }) =>
                    isActive ? "text-[#3a85eb]" : "text-[#666666]"
                  }
                >
                  Instructors
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to="/classes"
                    aria-label="classes"
                    title="classes"
                    className={({ isActive }) =>
                      isActive ? "text-[#3a85eb]" : "text-[#666666]"
                    }
                  >
                    classes
                  </NavLink>
                </li>
              )}

              <li>
                <NavLink
                  to="/dashboard"
                  aria-label="Dashboard"
                  title="Dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-[#3a85eb]" : "text-[#666666]"
                  }
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                {user ? (
                  <NavLink
                    onClick={handleLogout}
                    to="/"
                    aria-label="blog"
                    title="Logout"
                    className={({ isActive }) =>
                      isActive ? "text-[#666666]" : "text-[#666666]"
                    }
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/login"
                    aria-label="login"
                    title="Login"
                    className={({ isActive }) =>
                      isActive ? "text-[#3a85eb]" : "text-[#666666]"
                    }
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>

          {/* Logo */}
          <span className="text-gray-600 bg-yellow-100 p-2 rounded-full items-center flex">
            {/* <img
            src="https://i.ibb.co/McW0Fg3/toy-world-Google.png"
            alt="Website Logo"
            className="h-8 rounded-lg"
          />
          Toy World */}
            H
          </span>
        </div>

        {/* Center of the navbar */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* Navigation links */}
            <li tabIndex={0}>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive ? "text-[#3a85eb]" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                aria-label="Instructors"
                title="Instructors"
                className={({ isActive }) =>
                  isActive ? "text-[#3a85eb]" : "text-[#666666]"
                }
              >
                Instructors
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/classes"
                  aria-label="classes"
                  title="classes"
                  className={({ isActive }) =>
                    isActive ? "text-[#3a85eb]" : "text-[#666666]"
                  }
                >
                  classes
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/dashboard"
                  aria-label="Dashboard"
                  title="Dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-[#3a85eb]" : "text-[#666666]"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            <li>
              {user ? (
                <NavLink
                  onClick={handleLogout}
                  to="/"
                  aria-label="logout"
                  title="Logout"
                  className={({ isActive }) =>
                    isActive ? "text-[#3a85eb]" : "text-[#666666]"
                  }
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  aria-label="login"
                  title="Login"
                  className={({ isActive }) =>
                    isActive ? "text-[#3a85eb]" : "text-[#666666]"
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>

        {/* Right side of the navbar */}
        <div className="navbar-end flex justify-end">
          {user && (
            <div>
              {/* User profile picture */}
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <img
                  className="ring ring-blue-300 md:ring-blue-500 rounded-full block w-8"
                  src={user?.photoURL}
                  alt="not found"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
