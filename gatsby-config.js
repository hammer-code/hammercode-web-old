module.exports = {
  siteMetadata: {
    title: `Hammer Code`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/pages/events/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/pages/news/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
