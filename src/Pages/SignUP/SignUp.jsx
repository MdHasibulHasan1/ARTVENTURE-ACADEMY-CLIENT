import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import LoginWithGoogleGitHub from "../Shared/LoginWithGoogleGitHub";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

import Lottie from "lottie-react";
import animationData from "../../assets/loginAnimation.json";
import { saveUser } from "../../Apis/saveUser";
import { AiOutlineLoading } from "react-icons/ai";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { createUser, logOut, updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setLoading(true);
    const { name, email, image, password } = data;

    const userData = {
      name,
      email,
      photoURL: image,
      role: "student",
    };
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        saveUser(userData);
        setLoading(false);
        logOut()
          .then((result) => {
            navigate("/login");
          })
          .catch((error) => console.error(error));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });

        updateUserProfile(name, image)
          .then((result) => {})
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <>
      <Helmet>
        <title>ARTVENTURE ACADEMY | Sign Up</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="grid gap-4 md:grid-cols-2 lg:w-10/12  p-6 ">
          <div>
            <Lottie
              style={{ width: "100%", height: "100%" }}
              animationData={animationData}
              loop
              autoplay
            />
          </div>
          <form
            className="w-full rounded-lg py-2 px-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-2xl text-gray-800 font-bold mb-6 text-center">
              Sign Up
            </h2>
            <div className="flex justify-center mb-6">
              <BiUserCircle className="w-14 text-[#ff7703] block h-14"></BiUserCircle>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="block w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-0 focus:border-[#ff7703] peer focus:shadow-lg"
                {...register("name", { required: true })}
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-400 rounded-lg transition-all duration-300 transform -translate-y-7 scale-75 origin-[0] bg-white px-2 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#ff7703]"
              >
                Enter Your Name
              </label>
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="block w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-0 focus:border-[#ff7703] peer focus:shadow-lg"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,6}$/,
                    message: "Invalid email format",
                  },
                })}
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-400 rounded-lg transition-all duration-300 transform -translate-y-7 scale-75 origin-[0] bg-white px-2 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#ff7703]"
              >
                Enter your email address
              </label>
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least six characters",
                  },
                  pattern: {
                    value: /^(?=.*[!@#$%^&*])(?=.*[A-Z])/,
                    message:
                      "Password must contain at least one special character and one capital letter",
                  },
                })}
                className="block w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-0 focus:border-[#ff7703] peer focus:shadow-lg"
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
                className="absolute top-0 right-0 mt-3 mr-3 text-[#666666] hover:text-gray-500 focus:outline-none focus:text-gray-500"
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
                    <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a116 116 0 01116-116 115.45 115.45 0 0170.1 23.7l-162.4 162.4a115.58 115.58 0 01-23.7-70.1zm302.3 116a116 116 0 01-186.1 92.3L720 412.91a325.67 325.67 0 0134.59 44.49q-56.69 119.4-136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32z"></path>
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
                    <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a116 116 0 01116-116 115.45 115.45 0 0170.1 23.7l-162.4 162.4a115.58 115.58 0 01-23.7-70.1zm302.3 116a116 116 0 01-186.1 92.3L720 412.91a325.67 325.67 0 0134.59 44.49z"></path>
                  </svg>
                )}
              </button>
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder=" "
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="block w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-0 focus:border-[#ff7703] peer focus:shadow-lg"
                required
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-4 top-3 text-gray-400 rounded-lg transition-all duration-300 transform -translate-y-7 scale-75 origin-[0] bg-white px-2 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#ff7703]"
              >
                Confirm your password
              </label>
              {errors.confirmPassword && (
                <span className="text-red-600">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="image"
                placeholder=" "
                {...register("image", { required: true })}
                className="block w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-0 focus:border-[#ff7703] peer focus:shadow-lg"
                required
              />
              <label
                htmlFor="image"
                className="absolute left-4 top-3 text-gray-400 rounded-lg transition-all duration-300 transform -translate-y-7 scale-75 origin-[0] bg-white px-2 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#ff7703]"
              >
                Enter image URL
              </label>
              {errors.image && (
                <span className="text-red-600">Image URL is required</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#ff7703] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#e6690c] transition-colors duration-300 flex justify-center items-center"
            >
              {loading && (
                <AiOutlineLoading className="animate-spin mr-2 h-5 w-5" />
              )}
              Sign Up
            </button>
            <p className="text-red-500">{error}</p>
            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-[#ff7703] font-medium">
                Login
              </Link>
            </p>
            <div className="divider">OR</div>
            <LoginWithGoogleGitHub></LoginWithGoogleGitHub>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
