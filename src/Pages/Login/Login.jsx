import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import LoginWithGoogleGitHub from "../Shared/LoginWithGoogleGitHub";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import { AiOutlineLoading } from "react-icons/ai";
import animationData from "../../assets/loginAnimation.json";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const { signIn, setLoading, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setLoading(true);
    }
  }, [loading, setLoading]);

  const onSubmit = (data) => {
    setIsLoading(true);
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login successful!");
        navigate(from, { replace: true });
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>ARTVENTURE ACADEMY | Login</title>
      </Helmet>
      <div className="flex flex-col md:flex-row gap-4 mx-auto lg:w-10/12  p-8 ">
        <div className="md:w-1/2 flex items-center justify-center">
          <Lottie
            style={{ width: "100%", height: "100%" }}
            animationData={animationData}
            loop
            autoplay
          />
        </div>
        <div className="md:w-1/2">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-gray-800 font-bold mb-6 text-center">
              Welcome Back
            </h2>
            <div className="flex justify-center mb-6">
              <BiUserCircle className="w-16 text-[#ff7703] h-16" />
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="block w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-0 focus:border-[#ff7703] peer focus:shadow-lg"
                {...register("email", { required: true, maxLength: 120 })}
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-400 rounded-lg transition-all duration-300 transform -translate-y-7 scale-75 origin-[0] bg-white px-2 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#ff7703]"
              >
                Enter your email address
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                className="block w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-0 focus:border-[#ff7703] peer focus:shadow-lg"
                {...register("password", { required: true, maxLength: 120 })}
                required
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-3 text-gray-400 rounded-lg transition-all duration-300 transform -translate-y-7 scale-75 origin-[0] bg-white px-2 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#ff7703]"
              >
                Enter your password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 rounded-lg hover:text-gray-500 focus:outline-none"
              >
                {showPassword ? (
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="eye-invisible"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                    <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="eye"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                  </svg>
                )}
              </button>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center bg-gradient-to-r from-[#ff7703] to-[#ff3d00] text-white py-3 rounded-lg shadow-md hover:from-[#ff6600] hover:to-[#e03300] transition-colors duration-300"
            >
              {isLoading ? (
                <AiOutlineLoading className="m-auto animate-spin" />
              ) : (
                "Login"
              )}
            </button>
            {error && (
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}
            <div className="text-center mb-6">
              <Link
                to="/signUp"
                className="text-[#ff7703] underline font-semibold"
              >
                New to here? Create an account
              </Link>
            </div>{" "}
            <div className="mt-6">
              <LoginWithGoogleGitHub>Login</LoginWithGoogleGitHub>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
