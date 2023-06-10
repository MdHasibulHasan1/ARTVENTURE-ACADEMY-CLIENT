import React from "react";
import useMyEnrolledClasses from "../../../hooks/useMyEnrolledClasses";
import Anime from "react-anime";
import NotDataFound from "../../Shared/NotDataFound";

const MyEnrolledClasses = () => {
  const [enrolledClasses] = useMyEnrolledClasses();
  console.log(enrolledClasses);

  return (
    <div className="container mx-auto">
      {enrolledClasses.length > 0 ? (
        <Anime
          translateY={[-10, 0]}
          opacity={[0, 1]}
          delay={(el, index) => index * 100}
        >
          <h1 className="text-2xl text-center font-bold mb-4">
            My Enrolled Classes
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enrolledClasses.map((enrolledClass) => (
              <div
                className="border rounded p-4"
                key={enrolledClass.payment._id}
              >
                <h2 className="text-xl font-semibold">
                  {enrolledClass?.classInfo?.className}
                </h2>
                <p>Instructor: {enrolledClass?.classInfo?.instructorName}</p>
                <p>Price: {enrolledClass.payment.price}</p>
                <p>
                  Date: {new Date(enrolledClass.payment.date).toLocaleString()}
                </p>
                <p>Status: {enrolledClass.payment.status}</p>
                <p>
                  Available Seats: {enrolledClass?.classInfo?.availableSeats}
                </p>
                <p>Total Enrolled: {enrolledClass?.classInfo?.totalEnrolled}</p>

                <div className="mt-2 overflow-hidden rounded-lg hover:scale-105 transform transition duration-300">
                  <img
                    src={enrolledClass?.classInfo?.imgURL}
                    alt={enrolledClass?.classInfo?.className}
                  />
                </div>
              </div>
            ))}
          </div>{" "}
        </Anime>
      ) : (
        <NotDataFound
          label="Enroll Now"
          address="/dashboard/mySelectedClasses"
          message="You have not enrolled any classes."
        ></NotDataFound>
      )}
    </div>
  );
};

export default MyEnrolledClasses;
