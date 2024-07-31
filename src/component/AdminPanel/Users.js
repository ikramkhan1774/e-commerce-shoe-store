import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Pagination from "../Pagination";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentUsers = users.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(users.length / postPerPage);

  // User Fetching
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/getUsers");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching Users:", error);
      }
    };
    fetchUsers();
  }, [counter]);

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`/deleteUser/${id}`);
      console.log(response.data);
      setCounter(counter + 1);
      toast.success("User deleted successfully.");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
        <thead className='ltr:text-left rtl:text-right'>
          <tr>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              Full Name
            </th>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              Email
            </th>
          </tr>
        </thead>

        <tbody className='divide-y divide-gray-200'>
          {currentUsers.map((user) => {
            if (user.Admin) {
              return null;
            }
            return (
              <tr>
                <td className='whitespace-nowrap border-2 px-4 py-2 text-gray-700'>
                  {user.FirstName + " " + user.LastName}
                </td>
                <td className='whitespace-nowrap border-2 px-4 py-2 text-gray-700'>
                  {user.Email}
                </td>
                <td className='whitespace-nowrap border-2 px-4 py-2'>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className='inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}></Pagination>
    </div>
  );
}
