import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../Apis/saveUser";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWithGoogleGitHub = ({ children }) => {
  const { signInWithGoogle, setLoading, signInWithGitHub } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        const userData = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photoURL: loggedUser.photoURL,
          role: "student",
        };
        saveUser(userData);
        setLoading(false);
        navigate(from, { replace: true });
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        const userData = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photoURL: loggedUser.photoURL,
        };
        saveUser(userData);
        navigate(from, { replace: true });
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="my-6">
        <div className="text-gray-700 text-center text-lg font-semibold">
          ---- Or {children} With ----
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          <FcGoogle className="w-6 h-6" />
          <span className="text-gray-600 font-medium">Google</span>
        </button>
        <button
          onClick={handleGitHubSignIn}
          className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          <FaGithub className="w-6 h-6 text-gray-800" />
          <span className="text-gray-600 font-medium">GitHub</span>
        </button>
      </div>
    </>
  );
};

export default LoginWithGoogleGitHub;
