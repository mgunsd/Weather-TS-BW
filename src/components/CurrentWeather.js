import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { WeatherContext } from 'context';
import { H1 } from './commons';
export const GridContainer = styled.div`
  display: grid;
`;
export const CurrentWeather = () => {
  const { state: { data, city }, } = useContext(WeatherContext);
  // useEffect(() => {
  // }, [city]);
  // console.log(data)
  return (
    <GridContainer>
      <H1> {data.temp} ºC</H1>
    </GridContainer >
  )
}
