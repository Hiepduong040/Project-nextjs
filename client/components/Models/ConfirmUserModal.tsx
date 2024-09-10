import React from "react";
import { User } from "../../interfaces/interfaces";

interface ConfirmUserModalProps {
  onConfirm: () => Promise<void>;
  onCancel: () => void;
  isOpen: boolean;
  action: "lock" | "unlock";
  user: User | null;
}

export default function ConfirmUserModal({
  onConfirm,
  onCancel,
  isOpen,
  action,
  user,
}: ConfirmUserModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>
          {action === "lock"
            ? "Confirm Lock Account"
            : "Confirm Unlock Account"}
        </h2>
        <p>
          Are you sure you want to {action === "lock" ? "lock" : "unlock"} this
          account?
        </p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="btn-confirm">
            Yes
          </button>
          <button onClick={onCancel} className="btn-cancel">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
