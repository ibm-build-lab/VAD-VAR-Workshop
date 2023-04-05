import path from 'path';
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'url';
import remarkRelativeReplace from './src/plugins/remark-relative-replace.mjs';
import remarkInsertJSX from './src/plugins/remark-instert-jsx.mjs';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  pathPrefix: '/VAD-VAR-Workshop',
  siteMetadata: {
    title: `VAD-VAR`,
    description: 'Experiential Selling Workshops for IBM Ecosystem Partners',
    image: '',
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
  ***REMOVED***,
      __key: 'content'
***REMOVED***,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkRelativeReplace, remarkInsertJSX],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2', 'h3', 'h4', 'h5', 'h6'] }]
          ]
    ***REMOVED***,
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 590,
              withWebp: false,
              showCaptions: false,
              quality: process.env.NODE_ENV === 'development' ? 50 : 100
        ***REMOVED***
      ***REMOVED***
        ],
        extensions: [`.mdx`, '.md']
  ***REMOVED***
***REMOVED***,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
        additionalData: `@use "src/styles/resources" as *;`,
        sassOptions: {
          includePaths: [path.join(__dirname, '/src/styles')]
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  ]
};

export default config;
