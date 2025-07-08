import React from "react";
import styles from "./Task5.module.css";

const ProfileCard = ({
  backgroundColor,
  avatars,
  title,
  subtitle,
  titleColor = "#fff",
  subtitleColor = "#fff",
}) => (
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

const Task5 = () => {
  return (
    <div className={styles.container}>
      <ProfileCard
        backgroundColor="#19c6e6"
        avatars={["/images/avatar4_1.png"]}
        title="Miriam Jimenez"
        titleColor="#fff"
      />
      <ProfileCard
        backgroundColor="#8d2be2"
        avatars={[
          "/images/image6_1.png",
          "/images/image6_2.png",
          "/images/Avatar4_2.png",
        ]}
        title="Teams"
        subtitle="Two currently"
        titleColor="#fff"
        subtitleColor="#fff"
      />
      <ProfileCard
        backgroundColor="#fff900"
        avatars={["/images/avatar4_1.png", "/images/Avatar4_2.png"]}
        title="New Teams"
        titleColor="#000"
      />
    </div>
  );
};

export default Task5;
