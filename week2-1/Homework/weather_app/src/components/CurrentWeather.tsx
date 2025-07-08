import React from "react";
import styles from "./CurrentWeather.module.css";

type Props = {
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  wind: number;
};

const CurrentWeather = ({
  temperature,
  condition,
  icon,
  humidity,
  wind,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainInfo}>
        <div className={styles.temp}>
          <div className={styles.tempValue}>{Math.round(temperature)}°</div>
          <div className={styles.condition}>
            <span>{condition}</span>
          </div>
        </div>
        <div className={styles.icon}>
          <img src={icon} alt="weather icon" className={styles.icon} />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.card1}>
          <p className={styles.cardTitle}>Humidity</p>
          <strong className={styles.cardValue}>{humidity}%</strong>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>Wind</p>
          <strong className={styles.cardValue}>
            {wind.toFixed(1).replace(".", ",")} km/h
          </strong>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
