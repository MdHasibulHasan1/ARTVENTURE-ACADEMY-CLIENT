import React, { useEffect, useState } from "react";
import axios from "axios";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = () => {
    const url = "http://localhost:5000/instructors";

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
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Instructors</h2>
      <div className="grid grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="bg-gray-100 p-4">
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
