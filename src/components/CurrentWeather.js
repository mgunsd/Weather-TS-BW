import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { WeatherContext } from 'context';
import { H1, H4 } from './commons';
export const GridContainer = styled.div`
  display: grid;
`;
export const CurrentWeather = () => {
  const { state: { data, city }, selectCity } = useContext(WeatherContext);
  useEffect(() => {
    selectCity(city)
  }, []);
  return (
    <GridContainer>
      <H1>{city}</H1>
      <H4> {data.weather.description}</H4>
      <H1> {data.temp} ºC</H1>
    </GridContainer >
  )
}
