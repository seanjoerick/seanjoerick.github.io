import { useEffect } from "react";

type AlertProps = {
  type: "success" | "error";
  message: string;
  show: boolean;
  onClose: () => void;
};

export default function Alert({ type, message, show, onClose }: AlertProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-6 right-6 px-6 py-4 rounded-lg text-white shadow-lg transform transition-all
        ${type === "success" ? "bg-green-500" : "bg-red-500"} animate-slideIn`}
      style={{ zIndex: 9999 }}
    >
      {message}
    </div>
  );
}
