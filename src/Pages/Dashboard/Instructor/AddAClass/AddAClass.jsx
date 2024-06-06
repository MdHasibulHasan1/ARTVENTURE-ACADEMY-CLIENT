import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { AiOutlineLoading } from "react-icons/ai";

const AddAClass = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const img_hosting_token = "baae3e6b39110191c29e2e5fb79352d6";
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    const {
      availableSeats,
      className,
      instructorEmail,
      instructorName,
      price,
    } = data;

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const storedData = {
            availableSeats,
            className,
            instructorEmail,
            instructorName,
            price,
            imgURL,
            status: "pending",
            totalEnrolled: 0,
          };

          axios
            .post(
              "https://summer-camp-server-olive.vercel.app/classes",
              storedData
            ) // Replace with your server endpoint
            .then((response) => {
              setLoading(false);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            })
            .catch((error) => {
              console.error(error);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>ARTVENTURE ACADEMY | Add A Class</title>
      </Helmet>

      <div className="mx-auto lg:w-11/12 p-20 mb-20 ">
        <SectionTitle subTitle="A Classes" title="Add"></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
          <div className="mb-4">
            <label
              htmlFor="className"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Class Name:
            </label>
            <input
              type="text"
              id="className"
              name="className"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              {...register("className")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Class Image:
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="instructorName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Instructor Name:
            </label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
              readOnly
              value={user?.displayName}
              {...register("instructorName")}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="instructorEmail"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Instructor Email:
            </label>
            <input
              type="email"
              id="instructorEmail"
              name="instructorEmail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
              readOnly
              value={user?.email}
              {...register("instructorEmail")}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="availableSeats"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Available Seats:
            </label>
            <input
              type="number"
              id="availableSeats"
              name="availableSeats"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              {...register("availableSeats")}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              {...register("price")}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 flex justify-center items-center"
            >
              {loading ? (
                <AiOutlineLoading className="animate-spin text-xl" />
              ) : (
                "Add A Class"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAClass;
