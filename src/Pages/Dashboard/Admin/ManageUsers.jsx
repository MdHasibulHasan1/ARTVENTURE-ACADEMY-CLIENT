import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Spinner from "../../Shared/Spinner";

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
    makeInstructorMutation.mutate(user._id);
  };

  const handleMakeAdmin = (user) => {
    makeAdminMutation.mutate(user._id);
  };

  const handleDelete = (user) => {
    // Handle user deletion
  };

  return (
    <div className="w-full p-4">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Manage Users</title>
      </Helmet>

      <SectionTitle subTitle="Users:" title="Manage Users" />

      {users.length === 0 ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto ">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Actions</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    {user.role === "admin" ? (
                      <span className="text-red-600">Admin</span>
                    ) : user.role === "instructor" ? (
                      <span className="text-blue-600">Instructor</span>
                    ) : (
                      <span className="text-green-600">Student</span>
                    )}
                  </td>
                  <td className="px-4 py-3 flex space-x-2">
                    <div className="tooltip" data-tip="Make Admin">
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-sm bg-red-600 text-white"
                        disabled={
                          user.role === "admin" || makeAdminMutation.isLoading
                        }
                      >
                        <FaUserShield />
                      </button>
                    </div>
                    <div className="tooltip" data-tip="Make Instructor">
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-sm bg-blue-600 text-white"
                        disabled={
                          user.role === "instructor" ||
                          makeInstructorMutation.isLoading
                        }
                      >
                        <GiTeacher />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-sm bg-red-600 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
