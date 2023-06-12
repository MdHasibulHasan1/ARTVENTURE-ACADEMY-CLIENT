import React from "react";
import useMyEnrolledClasses from "../../../hooks/useMyEnrolledClasses";
import Anime from "react-anime";
import NotDataFound from "../../Shared/NotDataFound";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const MyEnrolledClasses = () => {
  const [enrolledClasses] = useMyEnrolledClasses();
  console.log(enrolledClasses);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>ARTVENTURE ACADEMY | My Enrolled Classes</title>
      </Helmet>
      {enrolledClasses.length > 0 ? (
        <Anime
          translateY={[-10, 0]}
          opacity={[0, 1]}
          delay={(el, index) => index * 100}
        >
          <SectionTitle subTitle="Enrolled Classes " title="My"></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enrolledClasses.map((enrolledClass) => (
              <div
                className="border rounded p-4 flex flex-col"
                key={enrolledClass.payment._id}
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    className="w-full h-64 object-cover"
                    src={enrolledClass?.classInfo?.imgURL}
                    alt={enrolledClass?.classInfo?.className}
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">
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
              </div>
            ))}
          </div>
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
