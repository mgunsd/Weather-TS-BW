import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Color } from 'utils';
import { WeatherContext } from 'context';
import { Body, H1, Label } from './commons';
export const GridContainer = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
`;
export const Row = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns:2fr 2fr 1fr 1fr ;
  border-bottom: 1px solid ${Color('gray')};
`;

export const Forecast = () => {
  const { state: { city, forecast }, showForecast } = useContext(WeatherContext);
  useEffect(() => {
    showForecast(city)
  }, [city]);

  const days = forecast.map((date) => {
    return (
      <Row>
        <Body key={date.datetime}>aa{date.datetime}</Body>
        <Body key={date.datetime}>bb{date.high_temp}</Body>
        <Body key={date.datetime}>cc{date.low_temp}</Body>
        <Body key={date.datetime}>dd{date.weather.description}</Body>
      </Row>
    )
  })
  return (
    <GridContainer>
      <H1> {city}</H1>
      <Row>
        <Label>Date</Label>
        <Label>Sky</Label>
        <Label>High Temp</Label>
        <Label>Low Temp</Label>
      </Row>

      {days}
    </GridContainer >
  )
}
