import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import axios from "axios";
import { useEffect, useState } from "react";
import Location from "./components/Location";
import Current from "./components/Current";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Peterborough ON&aqi=yes`
      )
      .then((data) => {
        setWeather(data.data);
      });
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=peterborough on&days=3&aqi=no&alerts=no`
      )
      .then((data) => {
        setForecastWeather(data.data);
      });
  }, []);

  return (
    <StyledApp className="App">
      <GlobalStyle />
      {weather && (
        <Weather>
          <Location
            setWeather={setWeather}
            weather={weather}
            setForecastWeather={setForecastWeather}
          />
          <Current weather={weather} />
          <h2>Forecast</h2>
          <StyledForecast>
            {forecastWeather &&
              forecastWeather.forecast.forecastday.map((day) => (
                <Forecast
                  key={day.date_epoch}
                  id={day.date_epoch}
                  date={day.date}
                  mintemp={day.day.mintemp_c}
                  maxtemp={day.day.maxtemp_c}
                  precip={day.day.totalprecip_mm}
                  condition={day.day.condition.text}
                  icon={day.day.condition.icon}
                  sunrise={day.astro.sunrise}
                  sunset={day.astro.sunset}
                  moon={day.astro.moon_phase}
                />
              ))}
          </StyledForecast>
        </Weather>
      )}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Weather = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  min-height: 80vh;
  width: 60%;
  padding: 2rem 1rem;
  margin: 2rem auto;
  background: linear-gradient(
    to right bottom,
    rgba(38, 39, 39, 0.7),
    rgba(38, 39, 39, 0.3)
  );
  border-radius: 2rem;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 769px) {
    width: 90%;
  }
`;

const StyledForecast = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fit, minmax(30px, 175px));
  gap: 1rem;
  justify-content: space-around;
`;

export default App;
