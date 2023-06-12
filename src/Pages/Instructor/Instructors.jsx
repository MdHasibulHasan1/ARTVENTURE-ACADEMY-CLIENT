import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Anime from "react-anime";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const { user, setLoading, loading } = useAuth();
  useEffect(() => {
    fetchInstructors();
  }, []);
  const handleLoading = () => {
    setLoading(false);
  };
  const fetchInstructors = () => {
    const url = "https://summer-camp-server-olive.vercel.app/instructors";

    axios
      .get(url)
      .then((response) => {
        setInstructors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Instructors</title>
      </Helmet>

      <SectionTitle subTitle="Instructors" title="Our" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <Anime
            key={instructor._id}
            delay={index * 150}
            translateY={["-20px", "0px"]}
            opacity={[0, 1]}
            easing="easeOutCubic"
          >
            <div className="bg-gray-100 p-4 rounded-md shadow-md transform transition duration-500 ease-in-out hover:scale-105">
              {instructor.photoURL && (
                <img
                  src={instructor.photoURL}
                  alt="Instructor"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-lg font-semibold">{instructor.name}</h3>
              <p className="text-gray-700 mb-2">Email: {instructor.email}</p>
              <p className="text-gray-700 mb-4">Role: {instructor.role}</p>
              <Link
                onClick={handleLoading}
                to={`/details/${instructor?.email}`}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                See Classes
              </Link>
            </div>
          </Anime>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
