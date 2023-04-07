import path from 'path';
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'url';
import remarkInsertJSX from './src/plugins/remark-insert-jsx.mjs';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { NODE_ENV, IMAGE_OPTIMIZATION } = process.env;

const isDev = NODE_ENV === 'development';
const optimizeImages = IMAGE_OPTIMIZATION === 'true';

const config = {
  pathPrefix: '/VAD-VAR-Workshop',
  siteMetadata: {
    title: `VAD-VAR`,
    description: 'Experiential Selling Workshops for IBM Ecosystem Partners',
    image: '',
    siteUrl: `https://ibm-build-lab.github.io`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkInsertJSX],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2', 'h3', 'h4', 'h5', 'h6'] }]
          ]
    ***REMOVED***,
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: optimizeImages
                ? ['png', 'jpg', 'jpeg', 'tiff', 'webp', 'avif', 'pdf', 'md']
                : ['pdf', 'md']
        ***REMOVED***
      ***REMOVED***,
          ...((optimizeImages && [
            {
              resolve: `gatsby-remark-images`,
              options: {
                linkImagesToOriginal: true,
                maxWidth: 650,
                withWebp: false,
                quality: isDev ? 10 : 100
          ***REMOVED***
        ***REMOVED***
          ]) ||
            [])
        ],
        extensions: [`.mdx`, '.md']
  ***REMOVED***
***REMOVED***,
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
        additionalData: `@use "src/styles/resources" as *;`,
        sassOptions: {
          includePaths: [path.join(__dirname, '/src/styles')]
    ***REMOVED***
  ***REMOVED***
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
