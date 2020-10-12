import React, {FC } from 'react';
import { ResponsiveMain, CurrentWeather } from 'components';

export const Home: FC = () => {
return (
  <ResponsiveMain>
    <CurrentWeather/>
  </ResponsiveMain>
);
}