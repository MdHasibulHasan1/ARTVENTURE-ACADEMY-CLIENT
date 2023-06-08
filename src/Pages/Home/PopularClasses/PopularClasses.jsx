import React, { useState } from "react";
import usePopularClasses from "../../../hooks/usePopularClasses";
import Reveal from "react-awesome-reveal";

const PopularClasses = () => {
  const [classes, refetch] = usePopularClasses();
  console.log(classes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {classes.map((classItem, index) => (
        <Reveal
          key={classItem._id}
          cascade
          damping={0.1}
          direction="up"
          duration={500}
          delay={index * 100}
        >
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src={classItem.imgURL}
              alt={classItem.className}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                Class Name: {classItem.className}
              </h3>
              <p className="text-gray-500">
                Instructor: {classItem.instructorName}
              </p>
              <p className="text-gray-500">
                Available Seats: {classItem.availableSeats}
              </p>
              <p className="text-gray-500">
                Total Enrolled: {classItem.totalEnrolled}
              </p>
              <p className="text-gray-500">Price: ${classItem.price}</p>
              {/* Add more class details if needed */}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default PopularClasses;
