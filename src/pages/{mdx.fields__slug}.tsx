import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import type { HeadProps } from 'gatsby';
import cx from 'classnames';
import SEO from '@components/SEO';
import PageHeader from '@components/PageHeader';
import MDXWrapper from '@components/MDXWrapper';
import ContentWrapper from '@components/ContentWrapper';
import TableOfContents from '@components/TableOfContents';
import * as styles from '@styles/pages/{mdx.fields__slug}.module.scss';

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
      };
      frontmatter: {
        toc?: boolean;
        title?: string;
        timeToComplete?: number;
        updated?: string;
      };
    };
  };
  children: React.ReactNode;
}

const Content = (props: ContentTemplateProps) => {
  const {
    data: {
      mdx: {
        tableOfContents: { items: tocItems },
        frontmatter: { toc = true, title, timeToComplete, updated }
      }
    },
    children
  } = props;

  const articleRef = useRef(null);
  const [currSection] = useState('');

  const showToc = (toc === null ? true : toc) && tocItems;

  return (
    <>
      <PageHeader {...{ timeToComplete, updated }}>{tocItems[0].title || title || ''}</PageHeader>
      <ContentWrapper className={styles.wrapper}>
        <article className={cx(styles.article, !showToc && styles.noToc)} ref={articleRef}>
          <MDXWrapper components={{ h1: () => null }}>{children}</MDXWrapper>
        </article>
        {showToc && <TableOfContents itemsList={tocItems} maxDepth={2} currSection={currSection} />}
      </ContentWrapper>
    </>
  );
};

export const pageQuery = graphql`
  query PostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents(maxDepth: 2)
      frontmatter {
        timeToComplete
        updated
        title
        toc
      }
    }
  }
`;

// SEO
export const Head = (props: HeadProps<ContentTemplateProps['data']>) => {
  const {
    location: { pathname },
    data: {
      mdx: {
        frontmatter: { title },
        tableOfContents: { items }
      }
    }
  } = props;

  return <SEO {...{ pathname, title: title || items[0].title || undefined }} />;
};

export default Content;
