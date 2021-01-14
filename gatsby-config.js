
module.exports = {
  siteMetadata: {
    title: `Aith Labs - IT-konsulter inriktade på Webbutveckling. Frontend och Backend.`,
    description: `Aith Labs - Konsulter inriktade mot webbutveckling. Frontend, Backend, Java, Kotlin, JavaScript, NodeJS, AWS, HTML/CSS, ReactJS, GatsbyJS, JAMStack.`,
    author: `Aith Labs`,
    siteUrl: `https://aith.se`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    'gatsby-plugin-robots-txt',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aith Labs`,
        short_name: `Aith`,
        start_url: `/`,
        background_color: `#FFBBEC`,
        theme_color: `#FFBBEC`,
        display: `minimal-ui`,
        icon: `src/images/aith_labs_favicon.png`,
      },
    },
  ],
}
