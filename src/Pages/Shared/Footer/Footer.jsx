import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="box-border">
      {/* Footer content */}
      <div className=" py-8 bg-gray-200">
        <div className="container mx-auto px-4">
          {/* Footer sections */}
          <div className="flex flex-wrap">
            {/* Section 1 */}
            <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
              <h3 className="text-black text-lg font-semibold mb-4">
                ARTVENTURE ACADEMY
              </h3>
              <p className="text-black">
                ARTVENTURE ACADEMY is a leading institution for art education
                and exploration, providing creative programs and workshops for
                individuals of all ages.
              </p>
            </div>
            {/* Section 2 */}
            <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
              <h3 className="text-black text-lg font-semibold mb-4">
                Contact Us
              </h3>
              <p className="text-black">123 Art Street</p>
              <p className="text-black">Cityville, USA</p>
              <p className="text-black">info@artventureacademy.com</p>
            </div>
            {/* Section 3 */}
            <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
              <h3 className="text-black text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <div className="text-black">
                <div>
                  <Link
                    to="/"
                    className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    to="/instructors"
                    className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
                  >
                    Instructors
                  </Link>
                </div>
                <div>
                  <Link
                    to="/classes"
                    className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
                  >
                    Classes
                  </Link>
                </div>
                <div>
                  <Link
                    to="/dashboard"
                    className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
            {/* Section 4 */}
            <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
              <h3 className="text-black text-lg font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex items-center">
                <Link
                  to="#"
                  className="text-blue-500 hover:text-blue-600 mr-4 transition-colors duration-300"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="#"
                  className="text-blue-500 hover:text-blue-600 mr-4 transition-colors duration-300"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="#"
                  className="text-blue-500 hover:text-blue-600 mr-4 transition-colors duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="bg-gray-800 py-2">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} ARTVENTURE ACADEMY. All rights
              reserved.
            </p>
            <p className="text-gray-300 text-sm">
              Designed and developed by Hasibul Hasan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
