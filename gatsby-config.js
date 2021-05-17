require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteConfig = require('./config/site-config');

module.exports = {


  siteMetadata: {
  ...siteConfig,
  },
  plugins: [
   {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_CMS_KEY,
      },
    }, 
    "gatsby-plugin-styled-components",

    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.js"),
      },
    },


  ],
};
