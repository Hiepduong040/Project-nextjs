import React from "react";

export default function ModelElert({ isOpen, onClose }:any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Thông báo</h2>
        <p className="mb-6">Vui lòng đăng nhập để tiếp tục sử dụng.</p>
        <button
          onClick={onClose}
          className="w-full rounded-lg bg-red-500 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
