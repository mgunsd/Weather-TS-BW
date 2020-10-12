import React, {useContext, useEffect, FC } from 'react';
import { WeatherContext } from 'context';
import { ResponsiveMain, H1, CurrentWeather } from 'components';

export const Home: FC = () => {
  const { state:{city}, selectCity } = useContext(WeatherContext);
 
return (
  <ResponsiveMain>
    <H1>{city}</H1>
    <CurrentWeather/>
  </ResponsiveMain>
);
}