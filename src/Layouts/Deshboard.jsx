import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = { role: "admin" };

  return (
    <div className="drawer lg:drawer-open">
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {isAdmin?.role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/manageClasses">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
              </li>
            </>
          )}

          {isAdmin?.role === "admin" && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3a85eb] " : "text-[#666666] "
                  }
                  to="/dashboard/addAClass"
                >
                  Add a Class
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/myClasses">My Classes</NavLink>
              </li>
            </>
          )}

          {isAdmin?.role === "users" && (
            <>
              <li>
                <NavLink to="/dashboard/mySelectedClasses">
                  My Selected Classes:
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myEnrolledClasses">
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">Payment</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

/* 
          
        
     */
