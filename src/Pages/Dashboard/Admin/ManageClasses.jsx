import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Spinner from "../../Shared/Spinner";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "https://summer-camp-server-olive.vercel.app/classes"
      );
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const handleApprove = async (classId) => {
    try {
      await axios.put(
        `https://summer-camp-server-olive.vercel.app/classes/approve/${classId}`
      );
      fetchClasses();
      Swal.fire({
        icon: "success",
        title: "Class Approved",
        text: "The class status has been updated to approved.",
      });
    } catch (error) {
      console.error("Error approving class:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to approve the class. Please try again.",
      });
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axios.put(
        `https://summer-camp-server-olive.vercel.app/classes/deny/${classId}`
      );
      fetchClasses();
      Swal.fire({
        icon: "success",
        title: "Class Denied",
        text: "The class status has been updated to denied.",
      });
    } catch (error) {
      console.error("Error denying class:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to deny the class. Please try again.",
      });
    }
  };

  const handleSendFeedback = (classId) => {
    setSelectedClassId(classId);
    setFeedbackModalOpen(true);
  };

  const handleSubmitFeedback = async () => {
    try {
      await axios.patch(
        `https://summer-camp-server-olive.vercel.app/classes/${selectedClassId}`,
        {
          feedback: feedbackText,
        }
      );

      // Reset the state variables
      setSelectedClassId(null);
      setFeedbackText("");
      setFeedbackModalOpen(false);

      Swal.fire({
        icon: "success",
        title: "Feedback Sent",
        text: "The feedback has been sent to the instructor.",
      });
    } catch (error) {
      console.error("Error sending feedback:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send the feedback. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Manage Classes</title>
      </Helmet>
      <div>
        <SectionTitle subTitle="Classes:" title="Manage" />
      </div>
      {classes.length === 0 && <Spinner />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
          >
            <img
              src={classItem.imgURL}
              alt={classItem.className}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{classItem.className}</h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Instructor:</span>{" "}
                {classItem.instructorName}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Email:</span>{" "}
                {classItem.instructorEmail}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Available Seats:</span>{" "}
                {classItem.availableSeats}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Price:</span> ${classItem.price}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Status:</span>{" "}
                {classItem.status}
              </p>
              <div className="grid gap-2 mt-4">
                <button
                  onClick={() => handleApprove(classItem._id)}
                  disabled={classItem.status === "approved"}
                  className="bg-green-500 text-white py-2 rounded-lg transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDeny(classItem._id)}
                  disabled={classItem.status == "pending"}
                  className="bg-red-500 text-white py-2 rounded-lg transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Deny
                </button>
                {classItem.status === "denied" && (
                  <button
                    onClick={() => handleSendFeedback(classItem._id)}
                    className="bg-orange-500 text-white py-2 rounded-lg transition-colors duration-300"
                  >
                    Send Feedback
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Send Feedback</h2>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full h-32 border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="Enter your feedback"
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleSubmitFeedback}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Submit
              </button>
              <button
                onClick={() => setFeedbackModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
