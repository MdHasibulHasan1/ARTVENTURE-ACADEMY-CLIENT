import React, { useState } from "react";
import usePopularClasses from "../../../hooks/usePopularClasses";
import Reveal from "react-awesome-reveal";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Spinner from "../../Shared/Spinner";
import { FaUser, FaChair, FaUsers, FaDollarSign } from "react-icons/fa";

const PopularClasses = () => {
  const [classes, refetch] = usePopularClasses();

  return (
    <>
      <SectionTitle subTitle="Popular Classes" title="Our"></SectionTitle>
      {classes.length === 0 ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {classes.map((classItem, index) => (
            <Reveal
              key={classItem._id}
              cascade
              damping={0.1}
              direction="up"
              duration={500}
              delay={index * 100}
            >
              <div className="rounded-lg shadow-lg p-4 bg-white transform transition-transform duration-300 hover:scale-105">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={classItem.imgURL}
                    alt={classItem.className}
                    className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-110 rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 whitespace-nowrap text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                    {classItem.className}
                  </h1>
                </div>

                <div className="mt-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center text-gray-900">
                      <FaUser className="text-orange-500 mr-2" />
                      <span className="font-bold">
                        Instructor: {classItem.instructorName}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-900">
                      <FaChair className="text-orange-500 mr-2" />
                      <span>Available Seats: {classItem.availableSeats}</span>
                    </div>
                    <div className="flex items-center text-gray-900">
                      <FaUsers className="text-orange-500 mr-2" />
                      <span>Total Enrolled: {classItem.totalEnrolled}</span>
                    </div>
                    <div className="flex items-center text-gray-900">
                      <FaDollarSign className="text-orange-500 mr-2" />
                      <span>Price: ${classItem.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
};

export default PopularClasses;
