import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const queryClient = useQueryClient();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const makeInstructorMutation = useMutation(
    async (userId) => {
      let res;
      if (users.find((user) => user._id === userId).role === "instructor") {
        res = await axiosSecure.patch(`/users/removeInstructor/${userId}`);
      } else {
        res = await axiosSecure.patch(`/users/instructor/${userId}`);
      }
      return res.data;
    },
    {
      onSuccess: () => {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User role updated!",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    }
  );

  const makeAdminMutation = useMutation(
    async (userId) => {
      const res = await axiosSecure.patch(`/users/admin/${userId}`);
      return res.data;
    },
    {
      onSuccess: () => {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User is now an Admin!",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    }
  );

  const handleMakeInstructor = (user) => {
    if (user.role !== "instructor") {
      makeInstructorMutation.mutate(user._id);
    }
  };

  const handleMakeAdmin = (user) => {
    makeAdminMutation.mutate(user._id);
  };

  const handleDelete = (user) => {
    // Handle user deletion
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Name | All users</title>
      </Helmet>
      <h3 className="text-3xl font-sans font-light my-4 text-center">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin"
                    ? "admin"
                    : user.role === "instructor"
                    ? "instructor"
                    : "student"}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      className="btn btn-sm btn-ghost bg-gray-400 text-white"
                      disabled
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  ) : (
                    <>
                      {user.role !== "admin" && (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-sm btn-ghost bg-red-600 text-white"
                          disabled={makeAdminMutation.isLoading}
                        >
                          <FaUserShield></FaUserShield>
                        </button>
                      )}
                    </>
                  )}
                </td>
                <td>
                  {user.role === "instructor" && (
                    <button
                      className="btn btn-sm btn-ghost bg-blue-600 text-white"
                      disabled
                    >
                      <GiTeacher></GiTeacher>
                    </button>
                  )}
                  {user.role !== "instructor" && (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-sm btn-ghost bg-blue-600 text-white"
                      disabled={makeInstructorMutation.isLoading}
                    >
                      <GiTeacher></GiTeacher>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-sm btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
