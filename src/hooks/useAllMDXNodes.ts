import { graphql, useStaticQuery } from 'gatsby';

interface MDXNode {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
  tableOfContents: {
    items: {
      url: string;
      title: string;
    }[];
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
          }
          frontmatter {
            title
          }
          tableOfContents(maxDepth: 1)
        }
      }
    }
  `);

  return nodes;
};

export default useAllMDXNodes;
