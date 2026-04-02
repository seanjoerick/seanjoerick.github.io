import { useEffect, useState } from "react";

type AlertProps = {
  show: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
};

export default function Alert({ show, message, onClose }: AlertProps) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed top-6 right-6 px-6 py-4 rounded-lg text-white shadow-lg transform transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      style={{
        zIndex: 9999,
        backgroundColor: "#FF9FFC",
        boxShadow: "0 4px 15px rgba(255, 159, 252, 0.5)",
      }}
    >
      {message}
    </div>
  );
}
