import { createFilePath } from 'gatsby-source-filesystem';

const onCreateNode = ({ node, getNode, actions }: any)  => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: './content'
***REMOVED***);

    console.log(relativeFilePath, createNodeField);

    createNodeField({
      node,
      name: 'slug',
      value: relativeFilePath.toLowerCase()
***REMOVED***);
  }
}

export { onCreateNode };