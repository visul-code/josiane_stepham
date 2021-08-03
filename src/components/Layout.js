import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { graphql } from "gatsby";

const SiteRoot = styled.div`
  margin: 100px 0px 0px 0px;
`;

const Layout = ({ children, location, data }) => {
  console.log(data);

  const metaDescription = data.seo.globalSeo.fallbackSeo.description;

  return (
    <SiteRoot id="top">
      <Helmet
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
        ]}
        title={data.seo.globalSeo.fallbackSeo.title}
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
