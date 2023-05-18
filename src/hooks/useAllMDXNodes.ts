import { graphql, useStaticQuery } from 'gatsby';

interface MDXNode {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    updated?: string;
    timeToComplete?: number;
  };
  tableOfContents: {
    items: {
      url: string;
      title: string;
***REMOVED***[];
  };
}

const useAllMDXNodes = (): MDXNode[] => {
  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          fields {
            slug
      ***REMOVED***
          frontmatter {
            title
            timeToComplete
            updated
      ***REMOVED***
          tableOfContents(maxDepth: 1)
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  `);

  return nodes;
};

export default useAllMDXNodes;
