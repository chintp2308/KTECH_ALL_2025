import styles from "./SignInForm.module.css";
import * as yup from "yup";
import { useForm, type FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

// ✅ Yup schema
const schema = yup.object({
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
      <h1 className={styles.header}>Log in</h1>
      <div className={styles.backgroundImage}></div>

      <div className={styles.formContainer}>
        <div className={styles.avatarContainer}>
          <img src="/images/h1.jpg" alt="avatar" className={styles.avatar} />
          <div className={styles.nameContainer}>
            <p className={styles.name}>Java Dow</p>
            <p className={styles.whiteText}>jane.doe@gmail.com.</p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit" className={styles.signInButton}>
            Continue
          </button>
          <p className={styles.agreeText}>
            <span className={styles.signupLink}>Forgot your password?</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
