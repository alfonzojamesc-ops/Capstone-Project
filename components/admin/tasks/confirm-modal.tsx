import React from "react";
import "./confirm-modal.css";

export function ConfirmModal({ title, message, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{title || "Confirm"}</h3>
        <p>{message || "Are you sure?"}</p>
        <div className="modal-buttons">
          <button className="confirm" onClick={onConfirm}>
            Yes
          </button>
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
