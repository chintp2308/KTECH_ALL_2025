import styles from "./HourlyForecast.module.css";

type Hour = {
  time: string;
  temp: number;
  icon: string;
};

type Props = {
  hours: Hour[];
};

const HourlyForecast = ({ hours }: Props) => {
  return (
    <div className={styles.container}>
      {hours.map((hour, index) => (
        <div key={index} className={styles.card}>
          <p className={styles.time}>{hour.time}</p>
          <img src={hour.icon} alt="weather icon" className={styles.icon} />
          <p className={styles.temp}>{Math.round(hour.temp)}°</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
