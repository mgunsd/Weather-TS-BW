import React, {useContext, FC } from 'react';
import { WeatherContext } from 'context';
import { ResponsiveMain, H1, Forecast } from 'components';

export const Detail: FC = () => {
  const { state:{city}} = useContext(WeatherContext);
 
return (
  <ResponsiveMain>
    <H1>{city}</H1>
    <Forecast/>
  </ResponsiveMain>
);
}