import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  function handleDismiss(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        <li key={index} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            id={toast.id}
            handleDismiss={handleDismiss}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
