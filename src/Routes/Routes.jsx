import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import Home from "../Pages/Home/Home";
import SignUp from "../pages/SignUP/SignUp";
import Login from "../pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Layouts/Deshboard";
import AddAClass from "../Pages/Deshboard/AddAClass/AddAClass";
import MyClassses from "../Layouts/MyClassses/MyClassses";

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
        element: <MyClassses></MyClassses>,
      },
    ],
  },
]);
