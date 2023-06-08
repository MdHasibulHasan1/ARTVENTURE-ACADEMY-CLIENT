import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useSelectedClasses from "../../hooks/useSelectedClasses";
import { useUpdateEnrolled } from "../../hooks/useUpdateEnrolled";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedClasses, refetch] = useSelectedClasses();
  console.log(selectedClasses);
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

  const handleSelect = (classItem) => {
    console.log(classItem);
    const {
      _id,
      availableSeats,
      totalEnrolled,
      imgURL,
      className,
      instructorName,
      price,
    } = classItem;
    if (!user) {
      Swal.fire({
        title: "Please login to select the course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
      return;
    }
    const exist = selectedClasses.find((selected) => selected.classId === _id);
    console.log(exist);
    if (exist) {
      Swal.fire({
        title: "You are already selected this class",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      return;
    }

    const selectedItem = {
      classId: _id,
      email: user?.email,
      availableSeats,
      imgURL,
      className,
      instructorName,
      price,
    };
    fetch("http://localhost:5000/selectedClasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          useUpdateEnrolled(_id, totalEnrolled);
          refetch();
        }
      });
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
              onClick={() => handleSelect(classItem)}
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
