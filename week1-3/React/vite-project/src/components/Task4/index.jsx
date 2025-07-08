import React from "react";
import styles from "./Task4.module.css";

const Task4 = ({ name, icon, fontname = "", avatar, subtitle }) => {
  const fontClass = fontname === "18px" ? styles.font1 : styles.font2;
  // const avatarClass = avatar === "" ? styles.avatar1 : styles.avatar2;
  return (
    <div className={styles.container}>
      <div className={`${styles.inform} `}>
        <img src={avatar} className={fontClass} />
        <div className={styles.inform_content}>
          <div>
            <span className={fontClass}> {name}</span>
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          </div>
          {icon}
        </div>
      </div>
    </div>
  );
};
export default Task4;
