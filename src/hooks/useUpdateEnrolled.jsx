import axios from "axios";
import Swal from "sweetalert2";

// update room status
export const useUpdateEnrolled = async (id, totalEnrolled) => {
  try {
    axios.patch(`http://localhost:5000/popularClasses/${id}`, {
      totalEnrolled,
    });
    console.log(id);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You are successfully selected this class.",
      showConfirmButton: false,
      timer: 1500,
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
