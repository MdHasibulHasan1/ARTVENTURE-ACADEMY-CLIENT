import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/approvedClasses");
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const { user } = useAuth();

  const handleSelect = (classId) => {
    if (!user) {
      alert("Please log in to select the course.");
      return;
    }

    // Handle the select button functionality here
  };

  return (
    <div className="class-list grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {classes.map((classItem) => (
        <div
          key={classItem._id}
          className={`class-card ${
            classItem.availableSeats === "0" ? "" : ""
          } transform transition-transform duration-300 hover:scale-105`}
        >
          <div className="relative">
            <img
              src={classItem.imgURL}
              alt={classItem.className}
              className="w-full h-48 object-cover rounded-t-md"
            />
            {classItem.availableSeats === "0" && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-80 rounded-t-md">
                <p className="text-white font-semibold">Sold Out</p>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{classItem.className}</h3>
            <p className="text-sm text-gray-600 mb-2">
              Instructor: {classItem.instructorName}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Available Seats: {classItem.availableSeats}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Price: {classItem.price}
            </p>
            <button
              disabled={
                classItem.availableSeats === "0" ||
                user?.role === "admin" ||
                user?.role === "instructor"
              }
              onClick={() => handleSelect(classItem._id)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
