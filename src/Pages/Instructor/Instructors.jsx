import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = () => {
    const url =
      "https://summer-camp-server-hasib7143-gmailcom.vercel.app/instructors";

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
    <div className="container mx-auto p4-6">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Instructors</title>
      </Helmet>
      <SectionTitle subTitle="Instructors" title="Our"></SectionTitle>
      <div className="grid grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <div
            key={instructor._id}
            className="bg-gray-100 p-4 rounded-md shadow-md transform transition duration-500 ease-in-out hover:scale-105"
          >
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
