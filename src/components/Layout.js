import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const SiteRoot = styled.div`
  margin: 100px 0px 0px 0px;
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
      <Navbar />
      {children}
    </SiteRoot>
  );
};

export default Layout;
