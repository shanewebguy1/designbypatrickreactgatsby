module.exports = {
  siteMetadata: {
    title: `ADA Friendly Developer & Designer`,
    description: ``,
    author: `@weibenfalk`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-gravityforms',
      options: {
          // Base URL needs to include protocol (http/https)
          baseUrl: 'https://www.designbypatrick.com',
          // Gravity Forms API
          api: {
              key: 'ck_e770b01354887700dcefec8d3857432e904ecf63',
              secret: 'cs_5b34d772a6b32b150e71e69fd4afb39aa5ac71b6',
          },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        excludedRoutes: ['/wp/v2/users/**', '/wp/v2/settings*'],
        baseUrl: 'designbypatrick.com',
        protocol: 'https',
        withWebp: true,
        hostingWPCOM: false,
        useACF: true,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `designbypatrick.com`,
              protocol: `https`,
            }
          }
        ] ,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://www.designbypatrick.com/',
          replacementUrl: '',
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Teko',
            variants: ['200', '400', '500', '600', '700'],
          },
          {
            family: 'Oswald',
            variants: ['200', '400', '500', '600', '700'],
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  
}
