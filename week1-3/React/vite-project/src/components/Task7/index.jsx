import React from "react";
import styles from "./Task7.module.css";

// Card chung
const Card = ({ children, className = "", style = {} }) => (
  <div className={`${styles.card} ${className}`} style={style}>
    {children}
  </div>
);

// Card địa điểm
const PlaceCard = ({ img, title, subtitle, bg = "#f9fddc", dots = false }) => (
  <Card className={styles.placeCard} style={{ background: bg }}>
    <img src={img} alt="place" className={styles.placeImg} />
    <div className={styles.placeText}>
      <div className={styles.placeTitle}>{title}</div>
      <div className={styles.placeSubtitle}>{subtitle}</div>
    </div>
    {dots && <span className={styles.dots}>•••</span>}
  </Card>
);

// Card thông báo
const InfoCard = ({ icon, title, subtitle, btn }) => (
  <Card className={styles.infoCard}>
    <img src={icon} alt="icon" className={styles.infoIcon} />
    <div className={styles.infoText}>
      <div className={styles.infoTitle}>{title}</div>
      <div className={styles.infoSubtitle}>{subtitle}</div>
    </div>
    {btn && <button className={styles.infoBtn}>{btn}</button>}
  </Card>
);

// Card thời tiết tuần
const WeatherWeek = ({ days }) => (
  <Card className={styles.weatherWeek}>
    {days.map((d, i) => (
      <div
        key={i}
        className={styles.weatherDay + (d.active ? " " + styles.active : "")}
      >
        <img src={d.icon} alt={d.day} className={styles.weatherIcon} />
        <div className={styles.weatherDayName}>{d.day}</div>
      </div>
    ))}
  </Card>
);

// Card nhiệt độ lớn
const TemperatureCard = ({ city, weather, temp, icon, gradient }) => (
  <Card className={styles.tempCard} style={{ background: gradient }}>
    <div>
      <div className={styles.tempCity}>{city}</div>
      <div className={styles.tempWeather}>{weather}</div>
    </div>
    <div className={styles.tempValue}>{temp}°</div>
    <img src={icon} alt="weather" className={styles.tempIcon} />
  </Card>
);

// Card lịch trình
const ScheduleCard = ({ title, subtitle, days }) => (
  <Card className={styles.scheduleCard}>
    <div className={styles.scheduleHeader}>
      <div>
        <div className={styles.scheduleTitle}>{title}</div>
        <div className={styles.scheduleSubtitle}>{subtitle}</div>
      </div>
      <span className={styles.dots}>•••</span>
    </div>
    <div className={styles.scheduleDays}>
      {days.map((d, i) => (
        <div
          key={i}
          className={styles.scheduleDay + (d.active ? " " + styles.active : "")}
        >
          <img src={d.icon} alt={d.day} className={styles.weatherIcon} />
          <div className={styles.weatherDayName}>{d.day}</div>
          <div className={styles.scheduleTime}>{d.time}</div>
        </div>
      ))}
    </div>
  </Card>
);

// Card ngày giờ
const DateTimeCard = ({ date, day, time }) => (
  <Card className={styles.dateTimeCard}>
    <div className={styles.dateCol}>
      <div className={styles.dateDay}>{date.day}</div>
      <div className={styles.dateNum}>{date.num}</div>
    </div>
    <div className={styles.divider} />
    <div className={styles.dateInfo}>
      <div className={styles.dateWeek}>{day}</div>
      <div className={styles.dateTime}>{time}</div>
    </div>
  </Card>
);

// Task7 component giữ nguyên như bạn đã viết
const Task7 = ({
  places,
  info,
  weatherDays,
  temperature,
  schedule,
  dateTime,
}) => {
  return (
    <div className={styles.container}>
      {places.map((p, i) => (
        <PlaceCard key={i} {...p} />
      ))}
      <InfoCard {...info} />
      <WeatherWeek days={weatherDays} />
      <TemperatureCard {...temperature} />
      <ScheduleCard {...schedule} />
      <DateTimeCard {...dateTime} />
    </div>
  );
};

export default Task7;
