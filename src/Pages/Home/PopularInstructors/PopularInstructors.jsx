import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Reveal from "react-awesome-reveal";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get(
          "https://summer-camp-server-olive.vercel.app/topInstructors"
        );
        setInstructors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div>
      <SectionTitle subTitle="Popular Instructors" title="Our"></SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {instructors.map((instructor, index) => (
          <Reveal
            key={instructor._id}
            cascade
            damping={0.1}
            direction="up"
            duration={500}
            delay={index * 100}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
              <div className="relative">
                <img
                  src={instructor.photoURL}
                  alt={instructor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80  duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                      <div className="font-bold text-xl mb-2">
                        {instructor.name}
                      </div>
                      <p className="text-gray-300 text-base">
                        {instructor.email}
                      </p>
                      {instructor.address && (
                        <p className="text-gray-300 text-base">
                          Address: {instructor.address}
                        </p>
                      )}
                      {instructor.gender && (
                        <p className="text-gray-300 text-base">
                          Gender: {instructor.gender}
                        </p>
                      )}
                      {instructor.phoneNumber && (
                        <p className="text-gray-300 text-base">
                          Phone Number: {instructor.phoneNumber}
                        </p>
                      )}
                    </div>
                    <div className="bg-gray-800 bg-opacity-90 py-2 px-4 w-full">
                      <p className="text-white text-sm text-center">
                        Additional Information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
