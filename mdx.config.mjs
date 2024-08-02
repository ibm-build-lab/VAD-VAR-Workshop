import plaintext from 'highlight.js/lib/languages/plaintext';
import xls from 'highlight.js/lib/languages/xl';
import { common } from 'lowlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkSectionize from 'remark-sectionize';
import remarkUnwrapImages from 'remark-unwrap-images';

/**
 * MDX config object
 * @typedef {Object} MDXConfig
 * @property {Record<string, import('json-schema').JSONSchema7>} schemas
 * @property {Record<string, any[]>} plugins
 */

/** @type {MDXConfig} */
const config = {
  schemas: {
    labs: {
      title: 'Lab',
      description: 'Metadata surrounding lab content',
      type: 'object',
      properties: {
        title: {
          description: 'Title string displayed in left-hand navigation',
          type: 'string'
    ***REMOVED***,
        updated: {
          description: 'Represents last date content was updated',
          type: 'string',
          format: 'date'
    ***REMOVED***,
        timeToComplete: {
          description: 'Amount of time in minutes lab will take to complete',
          type: 'number',
          exclusiveMinimum: 0
    ***REMOVED***,
        toc: {
          description: 'Whether final lab page should render table of contents',
          type: 'boolean'
    ***REMOVED***,
        desc: {
          description: 'Short plaintext desciption of the content within',
          type: 'string'
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  },
  plugins: {
    remarkPlugins: [
      [remarkUnwrapImages],
      [remarkGfm, { tablePipeAlign: false }],
      [remarkBreaks, {}],
      [remarkSectionize]
    ],
    rehypePlugins: [
      [
        rehypeHighlight,
        {
          languages: { ...common, plaintext, xls },
          aliases: { plaintext: ['txt'] }
    ***REMOVED***
      ],
      [rehypeSlug, {}],
      [
        rehypeAutolinkHeadings,
        { behavior: 'wrap', test: ['h2', 'h3', 'h4', 'h5', 'h6'] }
      ]
    ]
  }
};

export default config;
