import styled from "styled-components";

const Current = ({ weather }) => {
  return (
    <StyledCurrent>
      <Overview>
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
        <h2>{weather.current.condition.text}</h2>
        <h2>{weather.current.temp_c}&deg; C</h2>
        <h3>Feels Like: {weather.current.feelslike_c}&deg; C</h3>
        <p>Last updated: {weather.current.last_updated}</p>
      </Overview>
      <Details>
        <p>Wind: {weather.current.wind_kph} km/h</p>
        <p>Pressure: {weather.current.pressure_mb} mb</p>
        <p>Precipitation {weather.current.precip_mm} mm</p>
        <p>Humidity: {weather.current.humidity} %</p>
        <p>Cloud: {weather.current.cloud}</p>
        <p>Visibiliy: {weather.current.vis_km} km</p>
        <p>UV Index: {weather.current.uv}</p>
        <p>Gust: {weather.current.gust_kph} km/h</p>
      </Details>
    </StyledCurrent>
  );
};

const StyledCurrent = styled.div`
  width: 80%;
`;

const Overview = styled.div`
  text-align: center;

  h3 {
    margin: 0.75rem;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 200px));
  gap: 1rem;
  justify-content: space-around;
  margin: 1rem 0 1.5rem 0;
`;

export default Current;
