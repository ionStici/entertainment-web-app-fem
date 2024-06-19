import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error">
      <h1>404 error</h1>
      <p>This page doesn't exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ErrorPage;
