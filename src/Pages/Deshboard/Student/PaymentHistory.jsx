import React from "react";
import useMyEnrolledClasses from "../../../hooks/useMyEnrolledClasses";
import NotDataFound from "../../Shared/NotDataFound";

const PaymentHistory = () => {
  const [enrolledClasses] = useMyEnrolledClasses();
  console.log(enrolledClasses);

  return (
    <div>
      {enrolledClasses.length > 0 ? (
        enrolledClasses.map((payment) => (
          <div
            key={payment.payment._id}
            className="my-4 border border-gray-300 p-4 rounded-lg"
          >
            <p className="text-gray-600 mb-2">
              <strong>Date:</strong>{" "}
              {new Date(payment.payment.date).toLocaleString()}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> {payment.payment.email}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Price:</strong> ${payment.payment.price}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Transaction ID:</strong> {payment.payment.transactionId}
            </p>
            <hr className="my-2 border border-gray-200" />
          </div>
        ))
      ) : (
        <NotDataFound
          label="Enroll Now"
          address="/dashboard/mySelectedClasses"
          message="You have to enroll fast to see payment history."
        ></NotDataFound>
      )}
    </div>
  );
};

export default PaymentHistory;
