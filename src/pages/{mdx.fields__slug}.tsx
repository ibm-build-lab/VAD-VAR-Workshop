import React from 'react';
import { graphql } from 'gatsby';
import * as styles from '../styles/pages/{mdx.fields__slug}.module.scss';
import { MDXProvider } from '@mdx-js/react';
import TableOfContents from '../components/TableOfContents';

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
***REMOVED***;
  };
  children: React.ReactNode;
}

const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.tableWrapper}>
      <table>{children}</table>
    </div>
  );
};

const components = {
  table: TableWrapper
} as any;

const ContentTemplate = (props: ContentTemplateProps) => {
  const {
    data: {
      mdx: { tableOfContents }
***REMOVED***,
    children
  } = props;

  const { items: tocItems } = tableOfContents;

  return (
    <>
      <article className={styles.article}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
      <TableOfContents itemsList={tocItems} />
    </>
  );
};

export const pageQuery = graphql`
  query PostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents(maxDepth: 0)
***REMOVED***
  }
`;

export default ContentTemplate;
