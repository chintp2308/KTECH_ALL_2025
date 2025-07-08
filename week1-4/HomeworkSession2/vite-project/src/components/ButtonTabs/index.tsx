import styles from "./ButtonTabs.module.css";
import { useState } from "react";

type Props = {
  id: number;
  label: string;
  content: string;
};
const ButtonTabs = ({ tabs }: { tabs: Props[] }) => {
  const [active, setActive] = useState(0);
  const [activeOutline, setActiveOutline] = useState(0);
  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`${styles.buttonTabsActive}  ${
              active === idx ? styles.active : ""
            }`}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>{tabs[active].content}</div>
      <div className={styles.tabsOutline}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`${styles.buttonTabsOutline} ${
              activeOutline === idx ? styles.activeOutline : ""
            }`}
            onClick={() => setActiveOutline(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>{tabs[activeOutline].content}</div>
    </div>
  );
};

export default ButtonTabs;
