import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeSectionize from '@hbsnow/rehype-sectionize';
import rehypeHighlight from 'rehype-highlight';
import xls from 'highlight.js/lib/languages/xl';
import { fileURLToPath } from 'url';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const underConstrunction = ['**/Watsonx'];

const { NODE_ENV, LOCAL_IMAGES } = process.env;

const remoteImagesSettings = {
  resolve: require.resolve(`./src/plugins/gatsby-remark-remote-git-images`),
  options: {
    user: 'ibm-build-lab',
    repo: 'VAD-VAR-Workshop',
    branch: 'main',
    pathPrefix: 'content'
  }
};

const localImagesSettings = {
  resolve: `gatsby-remark-copy-linked-files`,
  options: {
    ignoreFileExtensions: ['pdf', 'md']
  }
};

// build flags
const isDev = NODE_ENV === 'development';
const useLocalImages = isDev || LOCAL_IMAGES == 'true';

const config = {
  trailingSlash: 'never',
  siteMetadata: {
    title: `VEST Workshops`,
    description: 'Experiential Selling Workshops for IBM Ecosystem Partners',
    image: '',
    siteUrl: `https://vest.buildlab.cloud/`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: '.',
        aliases: {
          i18n: 'i18n',
          '@components': 'src/components',
          '@styles': 'src/styles',
          '@plugins': 'src/plugins',
          '@hooks': 'src/hooks',
          '@helpers': 'src/helpers'
    ***REMOVED***
  ***REMOVED***
***REMOVED***,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [rehypeHighlight, { languages: { xls: xls } }],
            [rehypeSlug, {}],
            [rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2', 'h3', 'h4', 'h5', 'h6'] }],
            [rehypeSectionize, {}]
          ]
    ***REMOVED***,
        gatsbyRemarkPlugins: [useLocalImages ? localImagesSettings : remoteImagesSettings],
        extensions: [`.mdx`, '.md']
  ***REMOVED***
***REMOVED***,
    ...(useLocalImages ? ['gatsby-plugin-image'] : []),
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
        path: `${__dirname}/content`,
        ignore: isDev ? [] : ['**/test*.md', ...underConstrunction],
        fastHash: true
  ***REMOVED***,
      __key: 'content'
***REMOVED***
  ]
};

export default config;
