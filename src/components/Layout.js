import React from "react";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

const SiteRoot = styled.div`
  margin: 100px 0px 0px 0px;
`;

const Layout = ({ children, location }) => {
  return (
    <SiteRoot id="top">
      <SEO />
      {/*       <Helmet
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
      </Helmet> */}
      <Navbar />
      {children}
    </SiteRoot>
  );
};

export default Layout;
