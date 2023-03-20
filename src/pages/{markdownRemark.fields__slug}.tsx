import React from 'react';
import { graphql } from 'gatsby';

interface MarkdownRemark {
  html: string;
  frontmatter: {
    date: string;
    slig: string;
    title: string;
  };
}

const ContentTemplate = ({ data }: { data: { markdownRemark: MarkdownRemark } }) => {
  const {
    markdownRemark: { html }
  } = data;

  return <article dangerouslySetInnerHTML={{ __html: html }}></article>;
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
***REMOVED***
  }
`;

export default ContentTemplate;
