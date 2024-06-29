import { useForm } from "react-hook-form";
import styles from "./../styles/AuthPage.module.scss";
import ErrorMessage from "../ui/ErrorMessage";
import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { useRouter } from "../Router";

function LoginPage() {
  const { page, goHome, goLogin, goSignup } = useRouter();
  const isLogin = page === "login";

  const { user, login, signUp, isLoading, feedback, error, handleError, handleFeedback } = useUser();

  useEffect(() => {
    if (error) handleError();
    if (feedback) handleFeedback();
    if (user) goHome();
  }, [user, feedback, error]);

  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      loginEmail: "movie_lover@me.mov",
      loginPassword: "mysecretpassword",
      signupEmail: "dreamer_x0@hi.net",
      signupPassword: "1234567890abc",
      repeatPassword: "1234567890abc",
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
      <button className={styles.logo_box} onClick={goHome}>
        <img src="assets/logo.svg" />
      </button>

      <div className={styles.form_wrapper}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSuccess)}>
          {isLogin && (
            <div>
              <label htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                {...register("loginEmail", {
                  required: "Can’t be empty",
                  pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Wrong format" },
                })}
                type="text"
                placeholder="Email address"
                disabled={isLoading}
              />
              <ErrorMessage message={errors?.loginEmail?.message} classes={styles.error_message} />
            </div>
          )}

          {isLogin && (
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                {...register("loginPassword", { required: "Can’t be empty" })}
                type="password"
                placeholder="Password"
                disabled={isLoading}
              />
              <ErrorMessage message={errors?.loginPassword?.message} classes={styles.error_message} />
            </div>
          )}

          {!isLogin && (
            <div>
              <label htmlFor="signup-email">Email Address</label>
              <input
                id="signup-email"
                {...register("signupEmail", {
                  required: "Can’t be empty",
                  pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Wrong format" },
                })}
                type="text"
                placeholder="Email address"
                disabled={isLoading}
              />
              <ErrorMessage message={errors?.signupEmail?.message} classes={styles.error_message} />
            </div>
          )}

          {!isLogin && (
            <div>
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                {...register("signupPassword", { required: "Can’t be empty" })}
                type="password"
                placeholder="Password"
                disabled={isLoading}
              />
              <ErrorMessage message={errors?.signupPassword?.message} classes={styles.error_message} />
            </div>
          )}

          {!isLogin && (
            <div>
              <label htmlFor="repeat-password">Repeat Password</label>
              <input
                id="repeat-password"
                {...register("repeatPassword", {
                  required: "Can’t be empty",
                  validate: () => (getValues().signupPassword === getValues().repeatPassword ? true : "Password doesn't match"),
                })}
                type="password"
                placeholder="Repeat Password"
                disabled={isLoading}
              />
              <ErrorMessage message={errors?.repeatPassword?.message} classes={styles.error_message} />
            </div>
          )}

          <button disabled={isLoading}>{isLogin ? "Login to your account" : "Create an account"}</button>
        </form>

        <div className={styles.text_box}>
          <p>{isLogin ? "Don’t have an account?" : "Already have an account?"}</p>
          <button onClick={() => (isLogin ? goSignup() : goLogin())}>{isLogin ? "Sign Up" : "Login"}</button>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
