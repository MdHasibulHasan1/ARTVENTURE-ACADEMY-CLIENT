import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useMyClasses from "../../../hooks/useMyClasses";
import NotDataFound from "../../Shared/NotDataFound";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const MyClasses = () => {
  const [classes, refetch] = useMyClasses();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updatedClass, setUpdatedClass] = useState(null);
  console.log(updatedClass);
  const openUpdateModal = (classData) => {
    setUpdatedClass(classData);
    setIsUpdateModalOpen(true);
  };

  const updateClass = async () => {
    console.log(updatedClass);
    try {
      const response = await axios.put(
        `https://summer-camp-server-olive.vercel.app/myClasses/update/${updatedClass._id}`,
        updatedClass
      );
      // Handle the response if necessary

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
      {classes.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Class Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Enrolled Students</th>
                <th className="px-4 py-2">Feedback</th>
                <th className="px-4 py-2">Update</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classData) => (
                <tr key={classData._id}>
                  <td className="border px-4 py-2">{classData.className}</td>
                  <td className="border px-4 py-2">{classData.status}</td>
                  <td className="border px-4 py-2">
                    {classData.enrolledStudents || 0}
                  </td>
                  <td className="border px-4 py-2">
                    {classData.feedback || ""}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      disabled={classData?.status == "approved"}
                      className="bg-[#2563EB] hover:bg-[#2564eba6] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 text-white font-bold py-2 px-4 rounded"
                      onClick={() => openUpdateModal(classData)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isUpdateModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-black bg-opacity-50 absolute inset-0"></div>
              <div className="bg-white rounded p-4 z-10">
                <h2 className="text-xl font-bold mb-4">Update Class</h2>
                <div>
                  <input
                    type="text"
                    value={updatedClass?.className}
                    onChange={(e) =>
                      setUpdatedClass({
                        ...updatedClass,
                        className: e.target.value,
                      })
                    }
                    className="border w-full rounded py-2 px-4 mb-2"
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
                    className="border  w-full rounded py-2 px-4 mb-2"
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
                    className="border  w-full rounded py-2 px-4 mb-2"
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
                    className="border rounded py-2 px-4 mb-2"
                    placeholder="image"
                  />
                </div>
                <button
                  onClick={() => updateClass(updatedClass?._id)}
                  className="bg-[#2563EB] hover:bg-[#2564eba6] text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}{" "}
        </div>
      ) : (
        <div className="text-center mt-8">
          <NotDataFound
            label="Add Now"
            address="../../dashboard/addAClass"
            message="You have to add to see your classes."
          ></NotDataFound>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
