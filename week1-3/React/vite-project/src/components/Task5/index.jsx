import React from "react";
import styles from "./Task5.module.css";

const Task5 = ({
  backgroundColor,
  avatars,
  title,
  subtitle,
  titleColor = "#fff",
  subtitleColor = "#fff",
}) => {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <div className={styles.avatars}>
        {avatars &&
          avatars.map((src, idx) => (
            <img key={idx} src={src} className={styles.avatar} alt="avatar" />
          ))}
      </div>
      <div className={styles.texts}>
        <div className={styles.title} style={{ color: titleColor }}>
          {title}
        </div>
        {subtitle && (
          <div className={styles.subtitle} style={{ color: subtitleColor }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};
export default Task5;
