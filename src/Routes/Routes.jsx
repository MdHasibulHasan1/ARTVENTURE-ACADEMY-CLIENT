import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../pages/SignUP/SignUp";
import Login from "../pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Layouts/Dashboard";
import AddAClass from "../Pages/Dashboard/Instructor/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import MySelectedClasses from "../Pages/Dashboard/Student/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/Student/MyEnrolledClasses";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import Instructors from "../Pages/Instructor/Instructors";
import Classes from "../Pages/Classes/Classes";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";
import UserProfile from "../Pages/Home/UserProfile";
import InstructorClasses from "../Pages/Instructor/InstructorClasses";
import UserRoute from "./UserRoute";
import CheckoutForm from "../Pages/Dashboard/Student/CheckoutForm";
import Payment from "../Pages/Dashboard/Student/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:email",
        element: (
          <PrivateRoute>
            <InstructorClasses></InstructorClasses>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "addAClass",
        element: (
          <InstructorRoute>
            <AddAClass></AddAClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "mySelectedClasses",
        element: (
          <UserRoute>
            <MySelectedClasses></MySelectedClasses>
          </UserRoute>
        ),
      },
      {
        path: "myEnrolledClasses",
        element: (
          <UserRoute>
            <MyEnrolledClasses></MyEnrolledClasses>
          </UserRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <UserRoute>
            <Payment />
          </UserRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <UserRoute>
            <PaymentHistory></PaymentHistory>
          </UserRoute>
        ),
      },

      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
