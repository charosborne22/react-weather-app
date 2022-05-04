import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Location = ({ setWeather, weather, setForecastWeather }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}&aqi=yes`
      )
      .then((data) => {
        setWeather(data.data);
      });
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}&days=7&aqi=no&alerts=no`
      )
      .then((data) => {
        setForecastWeather(data.data);
      });
  };

  return (
    <StyledLocation>
      <div className="current-location">
        <h1>
          <FontAwesomeIcon icon={faLocationArrow} /> {weather.location.name}{" "}
          {weather.location.region} {weather.location.country}
        </h1>
        <p className="date">Currently: {weather.location.localtime}</p>
      </div>
      <Search>
        <h2>Search for another location:</h2>
        <form className="search" onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" />
          <button className="search-btn">Search</button>
        </form>
      </Search>
    </StyledLocation>
  );
};

const StyledLocation = styled.div`
  text-align: center;

  .date {
    font-style: italic;
    margin: 0.5rem;
  }
`;

const Search = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }
  .search-btn {
    background: black;
    color: white;
    outline: none;
    border: none;
    padding: 0.25rem 1.5rem;
  }
`;

export default Location;
