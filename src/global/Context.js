import React, { createContext, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "normalize.css";
import { mediaQueries } from "../utils/MediaQuerie";
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

  const GlobalStyle = createGlobalStyle`

//BODY, HTML
  html, body{
    background-color: ${({ theme }) => theme.colors.background};
   font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
  }


//TYPO
h1{
 font-size: 5vw;
 font-weight: 300;
 color: ${({ theme }) => theme.colors.secondary};

 ${mediaQueries.lessThan("tablet")`
font-size: 8vw;
`}

}


.paragraph{
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
}

.t-paragraph{
font-size: 3rem;
font-weight: 300;
line-height: 3.6rem;
color: ${({ theme }) => theme.colors.primary};

}



  `;

  const themes = {
    default: {
      colors: {
        primary: "#4f826e",
        secondary: "#da002d",
        background: "#ffffff",
        text: "#000000",
        textAlt: "#ffffff",
      },
      fonts: {
        primary: "Helvetica Neue, Arial, sans-serif;",
      },
    },

    dark: {},
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
