import React from "react";

interface ConfirmUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  actionType: "lock" | "unlock";
}

export default function ConfirmUserModal({
  isOpen,
  onClose,
  onConfirm,
  actionType,
}: ConfirmUserModalProps) {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-600 fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <p>
          {actionType === "lock"
            ? "Bạn có muốn khóa tài khoản này không?"
            : "Bạn có muốn mở tài khoản này không?"}
        </p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onConfirm}
            className="mr-2 rounded bg-green-500 px-4 py-2 text-white"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-yellow-500 rounded px-4 py-2 text-white"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
