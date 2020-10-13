import React, { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from 'context';
import { Button, Link, H4 } from '../commons';
import { Container } from './Container';

const SideContainer = styled.div`
  ${Container};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Cities = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Side = () => {
  const { state: { city, menu }, showForecast, selectCity } = useContext(WeatherContext);

  return (
    <SideContainer >
      {menu ?
        <>
          <Cities>
            <Button onClick={() => selectCity('London, UK')}>London</Button>
            <Button onClick={() => selectCity('New York')}>New York</Button>
            <Button onClick={() => selectCity('Mumbai')}>Mumbai</Button>
            <Button onClick={() => selectCity('Sydney, AU')}>Sydney</Button>
            <Button onClick={() => selectCity('Tokyo')}>Tokyo</Button>
          </Cities>
          <Link to={'/detail'}>Show Forcast</Link>
        </>
        :
        <>
          <H4>{city}</H4>
          <Link to={'/'} onClick={() => selectCity(city)}>Back</Link>
        </>
      }
    </SideContainer >
  );
}
