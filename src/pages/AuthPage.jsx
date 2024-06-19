import styles from "./../styles/User.module.scss";
import { Link, useLocation } from "react-router-dom";

function LoginPage() {
  const { pathname: path } = useLocation();
  const isLogin = path === "/login";

  return (
    <section className={styles.section}>
      <div className={styles.logo_box}>
        <img src="assets/logo.svg" />
      </div>

      <div className={styles.form_wrapper}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form className={styles.form}>
          <div>
            <input type="email" placeholder="Email address" value={isLogin ? "movie_lover@email.com" : ""} />
            {/* <span className={styles.error_text}>Error</span> */}
          </div>

          <div>
            <input type="password" placeholder="Password" value={isLogin ? "secretpassword" : ""} />
            {/* <span className={styles.error_text}>Error</span> */}
          </div>

          {!isLogin && (
            <div>
              <input type="password" placeholder="Repeat Password" />
              {/* <span className={styles.error_text}>Error</span> */}
            </div>
          )}
          <button>{isLogin ? "Login to your account" : "Create an account"}</button>
        </form>

        <div className={styles.text_box}>
          <p>{isLogin ? "Don’t have an account?" : "Already have an account?"}</p>
          <Link to={isLogin ? "/signup" : "/login"}>{isLogin ? "Sign Up" : "Login"}</Link>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
