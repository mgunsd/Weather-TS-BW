import React, { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from 'context';
import { Button } from '../commons';
import { Container } from './Container';

const SideContainer = styled.div`
  ${Container};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Side = () => {
  const { selectCity } = useContext(WeatherContext);

  return (
    <SideContainer >
      <Button onClick={() => selectCity('London')}>London</Button>
      <Button onClick={() => selectCity('New York')}>New York</Button>
      <Button onClick={() => selectCity('Mumbai')}>Mumbai</Button>
      <Button onClick={() => selectCity('Sydney')}>Sydney</Button>
      <Button onClick={() => selectCity('Tokyo')}>Tokyo</Button>
    </SideContainer >
  );
}
