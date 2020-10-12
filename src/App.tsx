import React, { FC } from 'react';
import { Theme, GlobalStyles } from 'styles';
import { WeatherProvider } from 'context';
import Routes from './routes';

const App: FC = () => {
  return (
    <Theme>
      <WeatherProvider>
        <GlobalStyles />
        <Routes />
      </WeatherProvider>
    </Theme>
  );
};
export default App;
