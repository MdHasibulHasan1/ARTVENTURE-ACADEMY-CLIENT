import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  const { user } = useAuth();
  const [selectedClasses, refetch] = useSelectedClasses();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mySelectedClasses/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handlePay = (classData) => {};

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">
        --My Selected Classes--
      </h1>
      <table className="w-full text-left bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Class</th>
            <th className="py-2 px-4 border-b">Instructor</th>
            <th className="py-2 px-4 border-b">Available Seats</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedClasses.map((classData) => (
            <tr key={classData._id}>
              <td className="py-2 px-4 border-b">{classData.className}</td>
              <td className="py-2 px-4 border-b">{classData.instructorName}</td>
              <td className="py-2 px-4 border-b">{classData.availableSeats}</td>
              <td className="py-2 px-4 border-b">{classData.price}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="btn btn-sm text-white bg-red-600 mr-2"
                  onClick={() => handleDelete(classData._id)}
                >
                  <MdDelete></MdDelete>
                </button>
                <Link to={`/dashboard/payment/${classData.classId}`}>
                  <button className="btn btn-sm btn-primary">Pay</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySelectedClasses;
