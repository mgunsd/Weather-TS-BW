import React, { useState, useContext, FC } from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import { colors as c } from './colors';
import { fonts as f } from './fonts';

const Mode = (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) ? 'default' : 'default';

export const useTheme = () => useContext(ThemeContext);

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState(Mode)
  return (
    <ThemeProvider
      theme={{
        colors: (themes[theme]).colors,
        fonts: (themes[theme]).fonts,
        setTheme, dark: (themes[theme]).dark,
        theme: theme
      }}
    >
      {children}
    </ThemeProvider>
  )
};

export const themes = {
  default: {
    dark: true,
    colors: {
      text: c.white,
      background: c.blue,
      primary: c.turq,
      //body: c.white,
      base: c.black,

      //
      white: '#FEFEFE',
      turq: '#32e0c4',
      gray: '#393e46',
      black: '#222831',
      blue: '#55b9f3'
    },
    fonts: {
      title: f.title,
      body: f.body,
    },
  }
};