import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Color } from 'utils';
import { WeatherContext } from 'context';
import { Body, H1, Icon } from './commons';
export const GridContainer = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr, 1fr;
  border-bottom: 1px solid ${Color('gray')};
`;

export const Forecast = () => {
  const { state: { city, forecast }, showForecast } = useContext(WeatherContext);
  useEffect(() => {
    showForecast(city)
  }, []);
  return (
    <GridContainer>
      <H1> {city}</H1>
      <Row>
        <Body>Date</Body>
        <Body>High Temp</Body>
        <Body>Low Temp</Body>
        <Body>Sky</Body>
      </Row>

      {forecast.map((date, i) => {
        return (
          <Row>
            <Body key={date.i}>aa{date.datetime}</Body>
            <Body key={date.i}>bb{date.high_temp}</Body>
            <Body key={date.i}>cc{date.low_temp}</Body>
            <Body key={date.i}>dd{date.weather.description}</Body>
          </Row>
        )
      })}
    </GridContainer >
  )
}
