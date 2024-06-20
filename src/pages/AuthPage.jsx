import { useForm } from "react-hook-form";
import styles from "./../styles/AuthPage.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ErrorMessage from "../ui/ErrorMessage";
import { useUser } from "../contexts/UserContext";
import { useEffect } from "react";

function LoginPage() {
  const { pathname: path } = useLocation();
  const isLogin = path === "/login";

  const { user, login, signUp } = useUser();

  const navigate = useNavigate();
  const goHome = () => navigate("/");

  useEffect(() => {
    if (user) goHome();
  }, [user]);

  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      loginEmail: "movie_lover@email.mov",
      loginPassword: "mysecretpassword",
      signupEmail: "john@domain.net",
      signupPassword: "1234567",
      repeatPassword: "1234567",
    },
    mode: "onSuccess",
    reValidateMode: "onSubmit",
  });

  const { errors } = formState;

  const onSuccess = (data) => {
    const { loginEmail, loginPassword, signupEmail, signupPassword } = data;

    if (isLogin) login({ loginEmail, loginPassword });
    if (!isLogin) signUp({ signupEmail, signupPassword });
  };

  if (user) return null;

  return (
    <section className={styles.section}>
      <div className={styles.logo_box}>
        <img src="assets/logo.svg" />
      </div>

      <div className={styles.form_wrapper}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSuccess)}>
          {isLogin && (
            <div>
              <input
                {...register("loginEmail", {
                  required: "Can’t be empty",
                  pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Wrong format" },
                })}
                type="text"
                placeholder="Email address"
              />
              <ErrorMessage message={errors?.loginEmail?.message} />
            </div>
          )}

          {isLogin && (
            <div>
              <input {...register("loginPassword", { required: "Can’t be empty" })} type="password" placeholder="Password" />
              <ErrorMessage message={errors?.loginPassword?.message} />
            </div>
          )}

          {!isLogin && (
            <div>
              <input {...register("signupEmail", { required: "Can’t be empty" })} type="email" placeholder="Email address" />
              <ErrorMessage message={errors?.signupEmail?.message} />
            </div>
          )}

          {!isLogin && (
            <div>
              <input {...register("signupPassword", { required: "Can’t be empty" })} type="password" placeholder="Password" />
              {errors?.signupPassword?.message && <span className={styles.error_text}>{errors.signupPassword.message}</span>}
            </div>
          )}

          {!isLogin && (
            <div>
              <input
                {...register("repeatPassword", {
                  required: "Can’t be empty",
                  validate: () => (getValues().signupPassword === getValues().repeatPassword ? true : "Password doesn't match"),
                })}
                type="password"
                placeholder="Repeat Password"
              />
              <ErrorMessage message={errors?.repeatPassword?.message} />
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
