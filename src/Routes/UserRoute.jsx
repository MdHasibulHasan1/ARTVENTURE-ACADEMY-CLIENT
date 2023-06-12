import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/UseUser";

import Spinner from "../Pages/Shared/Spinner";

const UserRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isUser, isUserLoading] = useUser();
  const location = useLocation();

  if (loading || isUserLoading) {
    return <Spinner></Spinner>;
  }

  if (user && isUser) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
