import { themes } from "./Themes";
import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import "normalize.css";

export const GlobalStateContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");
  const [open, setOpen] = useState(false);

  const handleSetOpen = () => {
    setOpen(!open);
  };

  const switchTheme = (e) => {
    setTheme(e);
  };

  return (
    <GlobalStateContext.Provider
      value={{ switchTheme, theme, open, handleSetOpen }}
    >
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
