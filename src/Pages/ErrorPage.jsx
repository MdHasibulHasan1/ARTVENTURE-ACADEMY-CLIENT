import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";

import errorAnimation from "../../src/assets/errorAnimation.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <section className="flex items-center h-screen text-blue-600">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <div className="w-3/12 h-1/3 mx-auto">
          <Lottie
            style={{ width: "100%", height: "100%" }}
            animationData={errorAnimation}
            loop
            autoplay
          />
        </div>
        <div className="max-w-md text-center">
          <h2 className="mb-4 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-4">
            {error?.message}
          </p>

          <button
            type="button"
            onClick={handleGoBack}
            className="bg-[#ff7703] hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            Back to homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
