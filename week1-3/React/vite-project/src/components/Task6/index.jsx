import React from "react";
import styles from "./Task6.module.css";

const Task6 = ({
  name,
  icon,
  fontname = "",
  avatar,
  subtitle,
  amount,
  time,
  badge,
}) => {
  const fontClass = fontname === "25px" ? styles.font1 : styles.font2;
  return (
    <div className={styles.container}>
      <div className={`${styles.inform} `}>
        <img src={avatar} />
        <div className={styles.inform_content}>
          <div className={styles.bell}>
            <div>
              <span className={fontClass}> {name}</span>
            </div>

            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          </div>

          {/* Phần bên phải */}
          <div className={styles.right}>
            {amount && <span className={styles.amount}>{amount}</span>}
            {time && <span className={styles.time}>{time}</span>}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderLeft: "1px solid #ccc",
                paddingLeft: "10px",
              }}
            >
              {icon}
              {badge && <span className={styles.badge}>{badge}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task6;
