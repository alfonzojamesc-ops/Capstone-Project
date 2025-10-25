import { useState } from "react";

export const useSnackbar = (timeout = 2500) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const show = (msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), timeout);
  };

  const Snackbar = visible ? (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "20px",
        fontSize: "14px",
        opacity: 0.95,
        transition: "opacity 0.3s",
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  ) : null;

  return { Snackbar, show };
};
