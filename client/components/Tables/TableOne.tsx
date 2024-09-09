"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getDataUser } from "../../services/user.service";
import { User } from "../../interfaces/interfaces";
import ConfirmUserModal from "../Models/ConfirmUserModal";
import InfoModal from "../Models/InfoModal";

const API_URL = "http://localhost:8080";

export default function TableOne() {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<"lock" | "unlock">(
    "lock",
  );
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [infoMessage, setInfoMessage] = useState<string>("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const handleOpenModal = (actionType: "lock" | "unlock", user: User) => {
    if (actionType === "lock" && user.status === 0) {
      setInfoMessage("Tài khoản đã bị khóa");
      setSelectedUser(user);
      setInfoModalOpen(true);
    } else if (actionType === "unlock" && user.status === 1) {
      setInfoMessage("Tài khoản đã được mở");
      setSelectedUser(user);
      setInfoModalOpen(true);
    } else {
      setSelectedAction(actionType);
      setSelectedUser(user);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  const handleCloseInfoModal = () => {
    setInfoModalOpen(false);
    setSelectedUser(null);
  };

  const handleConfirmAction = async () => {
    if (selectedUser) {
      try {
        const newStatus = selectedAction === "lock" ? 0 : 1;
        await axios.patch(`${API_URL}/users/${selectedUser.id}`, {
          status: newStatus,
        });
        setUsers(
          users.map((user) =>
            user.id === selectedUser.id ? { ...user, status: newStatus } : user,
          ),
        );
      } catch (error) {
        console.error("Error", error);
      }
    }
    handleCloseModal();
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getDataUser();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchUsers();
  }, []);

  // Calculate pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        User Table
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-7 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">Username</div>
          <div className="p-2.5 text-center xl:p-5">Email</div>
          <div className="p-2.5 text-center xl:p-5">Role</div>
          <div className="p-2.5 text-center xl:p-5">Profile Picture</div>
          <div className="p-2.5 text-center xl:p-5">Status</div>
          <div className="p-2.5 text-center xl:p-5">Open Account</div>
          <div className="p-2.5 text-center xl:p-5">Close Account</div>
        </div>

        {currentUsers.map((user) => (
          <div
            key={user.id}
            className={`grid grid-cols-7 ${
              user.id === users[users.length - 1].id
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.username}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.email}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.role}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <img
                src={user.profilePicture}
                alt={user.username}
                width={48}
                height={48}
              />
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p
                className={
                  user.status === 1 ? "text-green-500" : "text-red-500"
                }
              >
                {user.status === 1 ? "Active" : "Inactive"}
              </p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button
                onClick={() => handleOpenModal("unlock", user)}
                className="text-blue-500"
              >
                Open
              </button>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button
                onClick={() => handleOpenModal("lock", user)}
                className="text-red-500"
              >
                Close
              </button>
            </div>
          </div>
        ))}

        {/* Pagination controls */}
        <div className="mt-4 flex items-center justify-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 disabled:opacity-50"
          >
            Previous
          </button>

          {/* Page Number Buttons */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`bg-gray-200 text-gray-700 rounded-md px-4 py-2 ${currentPage === index + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-300"}`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Modal xác nhận khóa-mở */}
        {selectedUser && (
          <ConfirmUserModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleConfirmAction}
            actionType={selectedAction}
          />
        )}

        {/* modal xác nhận đã khóa-mở*/}
        {selectedUser && isInfoModalOpen && (
          <InfoModal
            isOpen={isInfoModalOpen}
            onClose={handleCloseInfoModal}
            message={infoMessage}
          />
        )}
      </div>
    </div>
  );
}
