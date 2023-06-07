import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import Home from "../Pages/Home/Home";
import SignUp from "../pages/SignUP/SignUp";
import Login from "../pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Layouts/Deshboard";
import AddAClass from "../Pages/Deshboard/Instructor/AddAClass/AddAClass";
import MyClasses from "../Pages/Deshboard/Instructor/MyClasses";
import MySelectedClasses from "../Pages/Deshboard/Student/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Deshboard/Student/MyEnrolledClasses";
import Payment from "../Pages/Deshboard/Student/Payment";
import ManageClasses from "../Pages/Deshboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Deshboard/Admin/ManageUsers";

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
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "addAClass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "mySelectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
