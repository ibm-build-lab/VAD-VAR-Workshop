import * as styles from '../styles/pages/{mdx.fields__slug}.module.scss';
import { MDXProvider } from '@mdx-js/react';
import React, { useEffect, useRef, useState } from 'react';
import TableOfContents from '../components/TableOfContents';
import { graphql } from 'gatsby';
import {
  BlockQuote,
  ImageWrapper,
  SmartLink,
  SubHeader,
  TableWrapper
} from '../components/replacements';
import { Props } from '@mdx-js/react/lib';
import type { HeadProps } from 'gatsby';
import SEO from '../components/SEO';

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
        title?: string;
        timeToComplete?: number;
        updated?: string;
  ***REMOVED***;
***REMOVED***;
  };
  children: React.ReactNode;
}

const components: Props['components'] = {
  table: TableWrapper,
  a: SmartLink,
  blockquote: BlockQuote,
  SubHeader,
  img: ImageWrapper
};

const ContentTemplate = (props: ContentTemplateProps) => {
  const {
    data: {
      mdx: {
        tableOfContents: { items: tocItems },
        frontmatter: { toc = true }
  ***REMOVED***
***REMOVED***,
    children
  } = props;

  const articleRef = useRef(null);
  const [currSection, setCurrSection] = useState('');

  useEffect(() => {
    if (!articleRef.current) return;
    const headingElements = (articleRef.current as HTMLElement).querySelectorAll('h2,h3,h4,h5');

    const cb: IntersectionObserverCallback = (entries) => {
      entries.forEach((e: IntersectionObserverEntry) => {
        if (e.isIntersecting) setCurrSection(e.target.id);
  ***REMOVED***);
***REMOVED***;

    const observer = new IntersectionObserver(cb, {
      rootMargin: '0px 0px -95% 0px',
      threshold: 0
***REMOVED***);

    headingElements.forEach((el) => {
      observer.observe(el);
***REMOVED***);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <article className={styles.article} ref={articleRef}>
        <MDXProvider
          components={{
            ...components
      ***REMOVED***}>
          {children}
        </MDXProvider>
      </article>
      {(toc === null ? true : toc) && tocItems && (
        <TableOfContents itemsList={tocItems} maxDepth={1} currSection={currSection} />
      )}
    </>
  );
};

export const pageQuery = graphql`
  query PostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents(maxDepth: 0)
      frontmatter {
        title
        toc
  ***REMOVED***
***REMOVED***
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
  ***REMOVED***
***REMOVED***
  } = props;

  return <SEO {...{ pathname, title: title || items[0].title || undefined }} />;
};

export default ContentTemplate;
