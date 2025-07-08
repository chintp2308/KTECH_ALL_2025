import React from "react";
import styles from "./Task2.module.css";

const Button = ({
  label,
  leftIcon,
  rightIcon,
  isStatic = false,
  rightIconBg,
  rightIconShape = "",
}) => {
  const iconClass =
    rightIconShape === "rounded"
      ? styles.rightIconRounded
      : styles.rightIconCircle;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftIcon}> {leftIcon}</div>
        {isStatic ? (
          <span className={styles.staticText}>{label}</span>
        ) : (
          <input className={styles.input} placeholder={label} />
        )}

        {rightIcon && (
          <div
            className={`${styles.rightIcon} ${iconClass}`}
            style={{ background: rightIconBg || "transparent" }}
          >
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};
export default Button;
