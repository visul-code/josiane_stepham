import React from "react";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";



import { mediaQueries } from "../utils/MediaQuerie";

const SiteRoot = styled.div`
  margin: 80px 0px 0px 0px;

  ${mediaQueries.lessThan("tablet")`
margin: 80px 0;

`}
`;

const Layout = ({ children, location }) => {
  return (
    <SiteRoot id="top">
       
      <Helmet
        htmlAttributes={{
          lang: "de",
        }}
      >
        <link rel="preconnect" href="https://datocms-assets.com" />
      </Helmet>

    



        {children}

   
    </SiteRoot>
  );
};

export default Layout;
