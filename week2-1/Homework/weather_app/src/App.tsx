import styles from "./App.module.css";
import WeatherApp from "./components/index.tsx";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
