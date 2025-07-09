import styles from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.homePage__header}>Hi!</h1>
      <div className={styles.backgroundImage}></div>
      <div className={styles.formContainer}>
        <form className={styles.homePage__content}>
          <input type="email" placeholder="Email" className={styles.input} />
          <button type="submit" className={styles.primaryButton}>
            Continue
          </button>
          <div className={styles.divider}>or</div>
          <button className={styles.socialButton + " " + styles.facebook}>
            Continue with Facebook
          </button>
          <button className={styles.socialButton + " " + styles.google}>
            Continue with Google
          </button>
          <button className={styles.socialButton + " " + styles.apple}>
            Continue with Apple
          </button>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinks__item}>
              <p className={styles.whiteText}>Don’t have an account?</p>
              <NavLink to="/signup" className={styles.signupLink}>
                Sign up
              </NavLink>
            </div>

            <NavLink to="/forgot-password" className={styles.forgot}>
              Forgot your password?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
