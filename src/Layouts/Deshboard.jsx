import { FaUserShield } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useUsers from "../hooks/useUsers";
import { SiGoogleclassroom } from "react-icons/si";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [users, loading, refetch] = useUsers();
  console.log("check", isAdmin, isInstructor);
  // const isAdmin = { role: "admin" };
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#d0d0d1]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}
          {isAdmin && (
            <>
              <div className="py-1 text-lg font-medium">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#0a0909be]" : "text-[#666666]"
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
                    isActive ? "text-[#0a0909be] " : "text-[#666666] "
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

          {isInstructor ? (
            <>
              <div className="py-1 text-lg text-black font-medium flex">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#0a0909be] " : "text-[#666666] "
                  }
                  to="/dashboard/addAClass"
                >
                  Add a Class
                </NavLink>
              </div>

              <div className="py-1 text-lg text-black font-medium flex">
                <NavLink
                  to="/dashboard/myClasses"
                  className={({ isActive }) =>
                    isActive ? "text-[#0a0909be]" : "text-[#666666]"
                  }
                >
                  My Classes
                </NavLink>
              </div>
            </>
          ) : (
            ""
          )}

          {!isAdmin && !isInstructor && (
            <>
              <div className="py-1 text-lg text-black font-medium flex">
                <NavLink
                  to="/dashboard/mySelectedClasses"
                  className={({ isActive }) =>
                    isActive ? "text-[#0a0909be]" : "text-[#666666]"
                  }
                >
                  My Selected Classes:
                </NavLink>
              </div>
              <div className="py-1 text-lg text-black font-medium flex">
                <NavLink
                  to="/dashboard/myEnrolledClasses"
                  className={({ isActive }) =>
                    isActive ? "text-[#0a0909be]" : "text-[#666666]"
                  }
                >
                  My Enrolled Classes
                </NavLink>
              </div>
              {/* <div className="py-1 text-lg text-black font-medium flex">
                <NavLink
                  to={`/dashboard/payment:/`}
                  className={({ isActive }) =>
                    isActive ? "text-[#0a0909be]" : "text-[#666666]"
                  }
                >
                  Payment
                </NavLink>
              </div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* 
          
        
     */
