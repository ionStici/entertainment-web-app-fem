function ErrorMessage({ message, classes }) {
  return <>{message && <span className={classes}>{message}</span>}</>;
}

export default ErrorMessage;
