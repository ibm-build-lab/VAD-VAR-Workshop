import path from 'path';
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'url';
import remarkInsertJSX from './src/plugins/remark-insert-jsx.mjs';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import createTheme from './src/helpers/create-theme.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { NODE_ENV, IMAGE_OPTIMIZATION } = process.env;

const syntaxTheme = createTheme();

const isDev = NODE_ENV === 'development';
const optimizeImages = IMAGE_OPTIMIZATION === 'true';

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
        }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkInsertJSX],
          rehypePlugins: [
            [rehypePrettyCode, { theme: syntaxTheme }],
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2', 'h3', 'h4', 'h5', 'h6'] }]
          ]
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: optimizeImages
                ? ['png', 'jpg', 'jpeg', 'tiff', 'webp', 'avif', 'pdf', 'md']
                : ['pdf', 'md']
            }
          },
          ...((optimizeImages && [
            {
              resolve: `gatsby-remark-images`,
              options: {
                linkImagesToOriginal: true,
                maxWidth: 650,
                withWebp: false,
                quality: isDev ? 10 : 100
              }
            }
          ]) ||
            [])
        ],
        extensions: [`.mdx`, '.md']
      }
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
        additionalData: `@use "src/styles/resources" as *;`,
        sassOptions: {
          includePaths: [path.join(__dirname, '/src/styles')]
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
        ignore: isDev ? [] : ['**/test*.md'],
        fastHash: true
      },
      __key: 'content'
    }
  ]
};

export default config;
