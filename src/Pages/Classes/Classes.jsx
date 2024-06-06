import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Reveal from "react-awesome-reveal";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useSelectedClasses from "../../hooks/useSelectedClasses";
import { useUpdateEnrolled } from "../../hooks/useUpdateEnrolled";
import useUsers from "../../hooks/useUsers";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import useMyEnrolledClasses from "../../hooks/useMyEnrolledClasses";
import Spinner from "../Shared/Spinner";

const Classes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedClasses, refetch] = useSelectedClasses();
  const [users, isUserLoading] = useUsers();
  const currentUser = users.find((us) => us?.email === user?.email);
  const [enrolledClasses, refetchEnrolledClasses] = useMyEnrolledClasses();

  const [classes, setClasses] = useState([]);
  const [loadingClasses, setLoadingClasses] = useState(true);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = () => {
    const url = "https://summer-camp-server-olive.vercel.app/approvedClasses";

    axios
      .get(url)
      .then((response) => {
        setClasses(response.data);
        setLoadingClasses(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSelect = (classItem) => {
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
        console.log(result);
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
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
      status: true,
    };
    fetch("https://summer-camp-server-olive.vercel.app/selectedClasses", {
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
    <div className="">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Classes</title>
      </Helmet>
      <SectionTitle subTitle="Classes" title="Our"></SectionTitle>
      {loadingClasses && <Spinner></Spinner>}
      <div className="group grid gap-6 grid-cols-1 text-gray-950 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {classes.map((classItem, index) => (
          <Reveal
            key={classItem._id}
            cascade
            damping={0.1}
            direction="down"
            duration={500}
            delay={index * 100}
          >
            <div
              key={classItem._id}
              className={` p-4 ${
                classItem.availableSeats === "0" ? "" : ""
              } transform transition-transform duration-300 group-hover:scale-105`}
            >
              <div className="relative">
                <img
                  src={classItem.imgURL}
                  alt={classItem.className}
                  className="w-full h-48 object-cover  rounded-t-md"
                />
                {classItem.availableSeats == "0" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-80 rounded-t-md">
                    <p className="text-white font-semibold">Sold Out</p>
                  </div>
                )}
              </div>
              <div className="">
                <h3 className="text-xl font-bold mb-2">
                  {classItem.className}
                </h3>
                <p className="text-sm  mb-2">
                  Instructor: {classItem.instructorName}
                </p>
                <p className="text-sm  mb-2">
                  Available Seats: {classItem.availableSeats}
                </p>
                <p className="text-sm  mb-4">Price: {classItem.price}</p>

                <button
                  disabled={
                    classItem.availableSeats == "0" ||
                    currentUser?.role === "admin" ||
                    currentUser?.role === "instructor" ||
                    selectedClasses?.find(
                      (selected) => selected.classId === classItem._id
                    ) ||
                    enrolledClasses.find(
                      (enrolledClass) =>
                        enrolledClass.payment.classId === classItem._id
                    )
                  }
                  onClick={() => handleSelect(classItem)}
                  className="px-4 py-2 w-full bg-[#ff7703] text-white rounded hover:bg-orange-400 disabled:bg-gray-500 disabled:border border-gray-700 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {enrolledClasses.find(
                    (enrolledClass) =>
                      enrolledClass.payment.classId === classItem._id
                  )
                    ? "Enrolled"
                    : "Select"}
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Classes;
