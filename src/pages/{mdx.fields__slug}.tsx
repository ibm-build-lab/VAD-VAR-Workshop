import * as styles from '../styles/pages/{mdx.fields__slug}.module.scss';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import TableOfContents from '../components/TableOfContents';
import { graphql } from 'gatsby';
import { SmartLink, TableWrapper } from '../components/replacements';
import { Props } from '@mdx-js/react/lib';

interface TOCItem {
  title: string;
  url: string;
  items?: TOCItem[];
}

interface ContentTemplateProps {
  data: {
    mdx: {
      tableOfContents: {
        items: TOCItem[];
  ***REMOVED***;
      frontmatter: {
        toc?: boolean;
  ***REMOVED***;
***REMOVED***;
  };
  children: React.ReactNode;
}

const components: Props['components'] = {
  table: TableWrapper,
  a: SmartLink
};

const ContentTemplate = (props: ContentTemplateProps) => {
  const {
    data: {
      mdx: { tableOfContents, frontmatter }
***REMOVED***,
    children
  } = props;

  const { toc = true } = frontmatter;
  const { items: tocItems } = tableOfContents;

  return (
    <>
      <article className={styles.article}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
      {(toc === null ? true : toc) && tocItems && <TableOfContents itemsList={tocItems} />}
    </>
  );
};

export const pageQuery = graphql`
  query PostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents(maxDepth: 0)
      frontmatter {
        toc
  ***REMOVED***
***REMOVED***
  }
`;

export default ContentTemplate;
