import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar.tsx";
import CurrentWeather from "./CurrentWeather.tsx";
import HourlyForecast from "./HourlyForecast.tsx";

const API_KEY = "c9a0ca46550648b29ce125849232709";

type WeatherData = {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
};

type HourlyData = {
  time: string;
  temp_c: number;
  condition: {
    icon: string;
  };
};

function WeatherApp() {
  const [city, setCity] = useState("Hanoi");
  const [inputCity, setInputCity] = useState("Hanoi");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [hourly, setHourly] = useState<HourlyData[]>([]);

  const fetchWeather = () => {
    axios
      .get<WeatherData>(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=vi`
      )
      .then((res) => setWeather(res.data))
      .catch((err) => console.error("Current weather error:", err));

    axios
      .get<{ forecast: { forecastday: { hour: HourlyData[] }[] } }>(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no&lang=vi`
      )
      .then((res) => setHourly(res.data.forecast.forecastday[0].hour))
      .catch((err) => console.error("Forecast error:", err));
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div>
      <div>
        <SearchBar
          city={inputCity}
          setCity={setInputCity}
          onSearch={() => setCity(inputCity)}
        />

        {weather && (
          <CurrentWeather
            temperature={weather.current.temp_c}
            condition={weather.current.condition.text}
            icon={weather.current.condition.icon}
            humidity={weather.current.humidity}
            wind={weather.current.wind_kph}
          />
        )}

        <HourlyForecast
          hours={hourly.slice(8, 20).map((h, idx) => ({
            time: idx === 0 ? "Now" : h.time.split(" ")[1].slice(0, 5),
            temp: h.temp_c,
            icon: h.condition.icon,
          }))}
        />
      </div>
    </div>
  );
}

export default WeatherApp;
