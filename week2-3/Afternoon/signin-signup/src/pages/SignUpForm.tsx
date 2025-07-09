import { NavLink } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import * as yup from "yup";
import { useForm, type FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

// ✅ Yup schema
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FieldValues) => {
    console.log("Form data:", data);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Sign Up</h1>
      <div className={styles.backgroundImage}></div>

      <div className={styles.formContainer}>
        <p className={styles.whiteText}>
          Looks like you don't have an account.
        </p>
        <p className={styles.whiteText}>Let's create a new account for</p>
        <p className={styles.whiteText}>jane.doe@gmail.com.</p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            {...register("email")}
          />
          <p className={styles.error}>{errors.email?.message}</p>

          <div className={styles.passwordField}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={styles.input}
              {...register("password")}
            />
            <button
              type="button"
              className={styles.toggleButton}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "View"}
            </button>
          </div>
          <p className={styles.error}>{errors.password?.message}</p>

          <p className={styles.agreeText}>
            By selecting and continuing below, I agree to the{" "}
            <span className={styles.signupLink}>
              Terms of Service and Privacy Policy
            </span>
            .
          </p>

          <button type="submit" className={styles.signInButton}>
            <NavLink to="/signin" className={styles.signInButton}>
              Agree and continue
            </NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
