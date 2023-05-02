import * as styles from '../styles/pages/{mdx.fields__slug}.module.scss';
import { MDXProvider } from '@mdx-js/react';
import React, { useEffect, useRef, useState } from 'react';
import TableOfContents from '../components/TableOfContents';
import { graphql } from 'gatsby';
import {
  BlockQuote,
  CodeBlock,
  ImageWrapper,
  QuizAlert,
  SmartLink,
  SubHeader,
  TableWrapper
} from '../components/replacements';
import { Props } from '@mdx-js/react/lib';
import type { HeadProps } from 'gatsby';
import SEO from '../components/SEO';
import cx from 'classnames';

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

interface MDXWrapperProps {
  children: React.ReactNode;
}

const components: Props['components'] = {
  table: TableWrapper,
  a: SmartLink,
  blockquote: BlockQuote,
  SubHeader,
  img: ImageWrapper,
  code: CodeBlock,
  QuizAlert: QuizAlert
};

const MDXWrapper = React.memo(function MDXWrapper({ children }: MDXWrapperProps) {
  return (
    <MDXProvider
      components={{
        ...components
      }}>
      {children}
    </MDXProvider>
  );
});

const ContentTemplate = (props: ContentTemplateProps) => {
  const {
    data: {
      mdx: {
        tableOfContents: { items: tocItems },
        frontmatter: { toc = true }
      }
    },
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
      });
    };

    const observer = new IntersectionObserver(cb, {
      rootMargin: '0px 0px -95% 0px',
      threshold: 0
    });

    headingElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const showToc = (toc === null ? true : toc) && tocItems;

  return (
    <>
      <article className={cx(styles.article, !showToc && styles.noToc)} ref={articleRef}>
        <MDXWrapper>{children}</MDXWrapper>
      </article>
      {showToc && <TableOfContents itemsList={tocItems} maxDepth={1} currSection={currSection} />}
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

export default ContentTemplate;
