import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./GetStarted.module.css";

const GetStarted = () => {
  return (
    <div>
      <button className={styles.button}>
        Get started <ArrowRight />
      </button>
    </div>
  );
};
export default GetStarted;
