import styles from "./../styles/AuthPage.module.scss";

function ErrorMessage({ message }) {
  return <>{message && <span className={styles.error_text}>{message}</span>}</>;
}

export default ErrorMessage;
