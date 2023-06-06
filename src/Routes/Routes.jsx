import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import Home from "../Pages/Home/Home";
import SignUp from "../pages/SignUP/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
