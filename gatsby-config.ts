import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `VAD-VAR`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              withWebp: true,
              showCaptions: true,
              quality: 100
        ***REMOVED***
      ***REMOVED***
        ]
  ***REMOVED***
***REMOVED***,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
  ***REMOVED***,
      __key: 'pages'
***REMOVED***,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
  ***REMOVED***,
      __key: 'content'
***REMOVED***
  ]
};

export default config;
