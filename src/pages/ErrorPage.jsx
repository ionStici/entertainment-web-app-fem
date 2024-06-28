import { useRouter } from "../contexts/RouterContext";

function ErrorPage() {
  const { goHome } = useRouter();

  return (
    <div className="error">
      <h1>404 error</h1>
      <p>This page doesn't exist.</p>
      <button
        onClick={() => {
          window.location.pathname = "";
          goHome();
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ErrorPage;
