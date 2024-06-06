import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InstructorClasses = () => {
  const { email } = useParams();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetchApprovedClasses();
  }, []);
  console.log(classes);
  const fetchApprovedClasses = async () => {
    try {
      const response = await axios.get(
        `https://summer-camp-server-olive.vercel.app/approvedClasses/${email}`
      );
      setClasses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container text-gray-950 mx-auto p-4">
      <h2 className="text-2xl my-2 font-bold mb-4">
        Approved Classes for {email}
      </h2>
      {classes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((classItem, index) => (
            <div
              key={classItem._id}
              className="bg-white rounded-lg p-4 shadow-lg"
            >
              <img
                src={classItem.imgURL}
                alt={classItem.className}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mt-2">
                    Class Name: {classItem.className}
                  </h3>
                  <p className="text-gray-700">
                    Instructor: {classItem.instructorName}
                  </p>
                  <p className="text-gray-700">
                    Available Seats: {classItem.availableSeats}
                  </p>
                  <p className="text-gray-700">
                    Total Enrolled: {classItem.totalEnrolled}
                  </p>
                  <p className="text-gray-700">Price: ${classItem.price}</p>
                  <p className="text-gray-700">Status :{classItem.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No approved classes found for {email}</p>
      )}
    </div>
  );
};

export default InstructorClasses;
