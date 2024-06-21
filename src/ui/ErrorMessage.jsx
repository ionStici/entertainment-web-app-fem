import styles from "./../styles/AuthPage.module.scss";

function ErrorMessage({ message }) {
  return <>{message && <span className={styles.error_message}>{message}</span>}</>;
}

export default ErrorMessage;
