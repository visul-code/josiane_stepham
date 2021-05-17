import React, { createContext, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

export const GlobalStateContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

const switchTheme = (e) => {

setTheme(e)

}

  const GlobalStyle = createGlobalStyle`
  body{

    background-color: ${({ theme }) => theme.background};


  }

  `;
  const themes = {
    default: {
      background: "#fafafa",

    },

    dark: {

    },
  };

  return (
    <GlobalStateContext.Provider value={{ switchTheme, theme}}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
