import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Color } from 'utils';
import { WeatherContext } from 'context';
import { Body, H1, Icon } from './commons';
export const GridContainer = styled.div`
  display: grid;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(40px, 1fr));
  border: 1px solid ${Color('gray')};


`;
export const Forecast = () => {
  const { state: { data, forecast }, } = useContext(WeatherContext);
  useEffect(() => {
  }, [forecast]);
  console.log(data)
  return (
    <GridContainer>
      <H1> detail</H1>
      {forecast.map((date, i) => {
        return (
          <Row>
            <Body key={date.i}>{date.datetime}</Body>
            <Body key={date.i}>{date.high_temp}</Body>
            <Body key={date.i}>{date.low_temp}</Body>
            <Body key={date.i}>{date.weather.description}</Body>
          </Row>
        )
      })}
    </GridContainer >
  )
}
