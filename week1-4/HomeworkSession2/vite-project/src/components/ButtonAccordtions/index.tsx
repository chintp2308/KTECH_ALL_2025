import React, { useState } from "react";
import styles from "./ButtonAccordtions.module.css";

interface AccordionItem {
  title: string;
  content: string;
}

interface Props {
  data: AccordionItem[];
}

export default function ButtonAccordtions({ data }: Props) {
  const [singleOpen, setSingleOpen] = useState<number | null>(null);
  const [multiOpen, setMultiOpen] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  const handleSingle = (idx: number) => {
    setSingleOpen(idx === singleOpen ? null : idx);
  };

  const handleMulti = (idx: number) => {
    setMultiOpen((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.col}>
        <h3>Single Accordtions</h3>
        {data.map((item, idx) => (
          <div key={idx}>
            <button
              className={`${styles.btn} ${
                singleOpen === idx ? styles.active : ""
              }`}
              onClick={() => handleSingle(idx)}
            >
              {item.title}
            </button>
            {singleOpen === idx && (
              <div className={styles.content}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.col}>
        <h3>Multi Accordtions</h3>
        {data.map((item, idx) => (
          <div key={idx}>
            <button
              className={`${styles.btn} ${multiOpen[idx] ? styles.active : ""}`}
              onClick={() => handleMulti(idx)}
            >
              {item.title}
            </button>
            {multiOpen[idx] && (
              <div className={styles.content}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
