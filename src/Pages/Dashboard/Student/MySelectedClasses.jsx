import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NotDataFound from "../../Shared/NotDataFound";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

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

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>ARTVENTURE ACADEMY | My Selected Classes</title>
      </Helmet>
      <SectionTitle subTitle="Selected Classes " title="My"></SectionTitle>
      {selectedClasses.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
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
                  <td className="py-2 px-4 border-b">
                    {classData.instructorName}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {classData.availableSeats}
                  </td>
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
      ) : (
        <div className="text-center mt-8">
          <NotDataFound
            label="select classes"
            address="/classes"
            message="You have not selected any classes."
          ></NotDataFound>
        </div>
      )}
    </div>
  );
};

export default MySelectedClasses;
