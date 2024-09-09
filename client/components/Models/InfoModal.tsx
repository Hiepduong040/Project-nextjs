import React from "react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function InfoModal({
  isOpen,
  onClose,
  message,
}: InfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-600 fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <p>{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
