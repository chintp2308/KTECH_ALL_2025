import React from "react";
import styles from "./RenderList01.module.css";

type Props = {
  logo: string;
  title: string;
  view: string;
};

const RenderList01 = ({ logo, title, view }: Props) => {
  return (
    <div className={styles.item}>
      <img src={logo} alt="logo" className={styles.logo} />
      <p className={styles.title}>{title}</p>
      <span className={styles.view}>{view}</span>
    </div>
  );
};
export default RenderList01;
