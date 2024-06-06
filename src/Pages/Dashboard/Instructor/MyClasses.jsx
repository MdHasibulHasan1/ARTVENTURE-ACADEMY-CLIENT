import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEdit } from "react-icons/fa";
import useMyClasses from "../../../hooks/useMyClasses";
import NotDataFound from "../../Shared/NotDataFound";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Spinner from "../../Shared/Spinner";

const MyClasses = () => {
  const [classes, refetch] = useMyClasses();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updatedClass, setUpdatedClass] = useState(null);

  const openUpdateModal = (classData) => {
    setUpdatedClass(classData);
    setIsUpdateModalOpen(true);
  };

  const updateClass = async () => {
    try {
      await axios.put(
        `https://summer-camp-server-olive.vercel.app/myClasses/update/${updatedClass._id}`,
        updatedClass
      );
      setIsUpdateModalOpen(false);
      refetch();
    } catch (error) {
      console.error("Error updating class:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>ARTVENTURE ACADEMY | My Classes</title>
      </Helmet>
      <SectionTitle subTitle="Classes" title="My"></SectionTitle>
      {classes.length === 0 && <Spinner />}
      {classes.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="uppercase">
              <tr className="bg-blue-100 text-black">
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Class Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Enrolled Students
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Feedback
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Update
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {classes.map((classData) => (
                <tr key={classData._id} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-4">{classData.className}</td>
                  <td className="px-6 py-4">{classData.status}</td>
                  <td className="px-6 py-4">
                    {classData.enrolledStudents || 0}
                  </td>
                  <td className="px-6 py-4">{classData.feedback || ""}</td>
                  <td className="px-6 py-4">
                    <button
                      disabled={classData?.status === "approved"}
                      className="flex items-center  disabled:opacity-45 disabled:cursor-not-allowed transition-colors duration-300 text-white font-bold  "
                      onClick={() => openUpdateModal(classData)}
                    >
                      <FaEdit color="black" size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isUpdateModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-black bg-opacity-50 absolute inset-0"></div>
              <div className="bg-white rounded-lg p-6 shadow-lg z-10 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4">Update Class</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={updatedClass?.className}
                    onChange={(e) =>
                      setUpdatedClass({
                        ...updatedClass,
                        className: e.target.value,
                      })
                    }
                    className="border w-full rounded py-2 px-4 mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Class Name"
                  />
                  <input
                    type="text"
                    value={updatedClass?.status}
                    onChange={(e) =>
                      setUpdatedClass({
                        ...updatedClass,
                        status: e.target.value,
                      })
                    }
                    className="border w-full rounded py-2 px-4 mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Status"
                  />
                  <input
                    type="number"
                    value={updatedClass?.price}
                    onChange={(e) =>
                      setUpdatedClass({
                        ...updatedClass,
                        price: e.target.value,
                      })
                    }
                    className="border w-full rounded py-2 px-4 mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Price"
                  />
                  <input
                    type="url"
                    value={updatedClass?.imgURL}
                    onChange={(e) =>
                      setUpdatedClass({
                        ...updatedClass,
                        imgURL: e.target.value,
                      })
                    }
                    className="border w-full rounded py-2 px-4 mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Image URL"
                  />
                </div>
                <div className="flex justify-end mt-4 space-x-4">
                  <button
                    onClick={updateClass}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md transition-colors duration-300"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setIsUpdateModalOpen(false)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center mt-8">
          <NotDataFound
            label="Add Now"
            address="../../dashboard/addAClass"
            message="You have to add to see your classes."
          />
        </div>
      )}
    </div>
  );
};

export default MyClasses;
