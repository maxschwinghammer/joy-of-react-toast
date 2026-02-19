import { useEffect } from "react";

export function useEscapeKey(action) {
  function handleEscape(event) {
    if (event.code === "Escape") {
      action();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });
}
