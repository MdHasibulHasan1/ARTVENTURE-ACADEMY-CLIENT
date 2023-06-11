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
import Payment from "../Pages/Dashboard/Student/Payment";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";

import Instructors from "../Pages/Instructor/Instructors";
import Classes from "../Pages/Classes/Classes";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";

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
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "payment/:Id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
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
