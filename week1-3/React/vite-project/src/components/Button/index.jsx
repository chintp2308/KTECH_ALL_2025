import React from "react";
import styles from "./button.module.css";
// type TButtonProps ={
//     label: String;
//     leftIcon?: React.ReactNode
//     rightIcon?: React.ReactNode
//     type?: 'primary' | 'outline'
// }
const Button = ({ label, leftIcon, rightIcon, color = "back" }) => {
  return (
    <div>
      <button
        className={`${styles.button} ${
          color === "black" ? styles.black : styles.white
        }`}
      >
        <span>
          {leftIcon}
          {label}
        </span>
        {rightIcon}
      </button>
    </div>
  );
};

export default Button;
