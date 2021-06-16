require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteConfig = require("./config/site-config");

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: DATO_CMS_KEY,
      },
    },

    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: siteConfig.sitemapPath,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: siteConfig.siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteConfig.siteUrl,
        sitemap: `${siteConfig.siteUrl}${siteConfig.sitemapPath}`,
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.js"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
