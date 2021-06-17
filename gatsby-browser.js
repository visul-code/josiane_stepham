import GlobalContextProvider from "./src/global/Context";
import { GlobalStyle } from "./src/global/GlobalStyles";
import React from "react";

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);
