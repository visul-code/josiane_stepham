import React, { createContext, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStateContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const switchTheme = (e) => {
    setTheme(e);
  };

  const GlobalStyle = createGlobalStyle`
  html, body{

    background-color: ${({ theme }) => theme.colors.background};
   font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  `;
  const themes = {
    default: {
      colors: {
        primary: "#4f826e",
        secondary: "#da002d",
        background: "#ffffff",
      },
      fonts: {
        primary: "Helvetica Neue, Arial, sans-serif;",
      },
    },

    dark: {},
  };

  return (
    <GlobalStateContext.Provider value={{ switchTheme, theme }}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
