import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { WeatherContext } from 'context';
import { H1, Icon } from './commons';
export const GridContainer = styled.div`
  display: grid;
`;
export const CurrentWeather = () => {
  const { state: { data, city }, } = useContext(WeatherContext);
  console.log(data)
  return (
    <GridContainer>
      <H1> {data.weather.description}</H1>
      <H1> {data.temp} ºC</H1>
    </GridContainer >
  )
}
