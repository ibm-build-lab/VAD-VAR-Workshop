import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';

const DEFAULT_LOCALE = 'en';

const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: './content',
      trailingSlash: false
***REMOVED***);

    const splitPath = relativeFilePath.toLowerCase().split('/');
    const splitFileName = splitPath[splitPath.length - 1].split('.');

    if (splitFileName.length === 1) {
      splitPath.splice(0, 0, DEFAULT_LOCALE);
***REMOVED*** else {
      splitPath.splice(0, 0, splitFileName[splitFileName.length - 1]);
      splitPath[splitPath.length - 1] = splitFileName[splitFileName.length - 2];
***REMOVED***

    const cleanPath: string = splitPath.filter((s) => !!s && s !== 'readme').join('/');

    createNodeField({
      node,
      name: 'slug',
      value: cleanPath
***REMOVED***);
  }
};

export { onCreateNode };
