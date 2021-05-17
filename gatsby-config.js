module.exports = {
  siteMetadata: {
    title: "Gatsby Boilerplate",
  },
  plugins: [
/*     {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "",
      },
    }, */
    "gatsby-plugin-styled-components",

    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.js"),
      },
    },


  ],
};
