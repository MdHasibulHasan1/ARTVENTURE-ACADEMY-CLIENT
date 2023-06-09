import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { MdDelete } from "react-icons/md";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51NFA0YSI9gc02NTfAsTxwI3roXGPCLhci95nzmJngZaC9ZdfERWqbDnafPeDH2bFcIgGHs8L7SEInYdHE15g2aVJ00tqWJJjZv"
);
const MySelectedClasses = () => {
  const { user } = useAuth();
  const [selectedClasses, refetch] = useSelectedClasses();
  const [selectedClass, setSelectedClass] = useState(null);

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

  const handlePay = (classData) => {
    setSelectedClass(classData);
  };

  const closeModal = () => {
    setSelectedClass(null);
  };

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
                <Link to="/dashboard/payment">
                  <button
                    className="btn btn-primary"
                    onClick={() => handlePay(classData)}
                  >
                    Pay
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedClass && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-6 rounded-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <p>
              Class: <strong>{selectedClass.className}</strong>
            </p>
            <p>
              Instructor: <strong>{selectedClass.instructorName}</strong>
            </p>
            <p>
              Price: <strong>{selectedClass.price}</strong>
            </p>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                closeModal={closeModal}
                selectedClass={selectedClass}
              />
            </Elements>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySelectedClasses;
