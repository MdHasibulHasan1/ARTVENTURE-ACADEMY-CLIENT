import React from "react";
import myClasses from "../../../hooks/MyClasses";

const MyClasses = () => {
  const [classes, refetch] = myClasses();
  console.log(classes);
  return (
    <div>
      <h2>Classes</h2>
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
              <td className="border px-4 py-2">{classData.feedback || ""}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => updateClass(classData._id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
