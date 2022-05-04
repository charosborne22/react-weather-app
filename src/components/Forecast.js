import styled from "styled-components";

const Forecast = ({
  date,
  id,
  mintemp,
  maxtemp,
  precip,
  condition,
  icon,
  sunrise,
  sunset,
  moon,
}) => {
  return (
    <div className="day" id={id}>
      <img src={icon} alt={condition} />
      <Date>{date}</Date>
      <p>{condition}</p>
      <p>Min: {mintemp} &deg; C</p>
      <p>Max: {maxtemp} &deg; C</p>
      <p>Precipitation: {precip} mm</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
      <p>Moon: {moon}</p>
    </div>
  );
};

export default Forecast;

const Date = styled.p`
  font-style: italic;
`;
