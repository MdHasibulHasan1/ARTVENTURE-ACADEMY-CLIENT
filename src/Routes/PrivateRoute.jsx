import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../Pages/Shared/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, setLoading, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
