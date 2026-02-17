import { useState } from "react";
import { createContext } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([
    {
      message: "Test",
      variant: "error",
      id: crypto.randomUUID(),
    },
  ]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        message: message,
        variant: variant,
        id: crypto.randomUUID(),
      },
    ];
    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <ToastContext value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
