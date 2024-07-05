import { Link, paths } from "../Router";

function ErrorPage() {
  return (
    <div className="error">
      <h1>404 Not Found</h1>
      <p>This page doesn't exist.</p>
      <Link to={paths.home}>Back to Home</Link>
    </div>
  );
}

export default ErrorPage;
