import React, { useMemo } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import cx from 'classnames';
import useCurrentHeading from '@hooks/useCurrentHeading';
import * as styles from './TableOfContents.module.scss';

interface TableOfContentsProps {
  itemsList: TOCItem[];
  currSection: string | undefined;
  maxDepth?: number;
}

interface TOCItem {
  title: string;
  url: string;
  items?: TOCItem[];
}

interface FlatTOCItem extends Omit<TOCItem, 'items'> {
  depth: number;
}

const flattenTOC = (toc: TOCItem[], flatList: FlatTOCItem[] = [], depth = 0): FlatTOCItem[] => {
  toc.forEach((item) => {
    const { title, url, items } = item;
    flatList.splice(flatList.length, 0, {
      depth,
      title,
      url
    });

    if (items && items.length > 0) flattenTOC(items, flatList, depth + 1);
  });

  return flatList;
};

const TableOfContents = (props: TableOfContentsProps) => {
  const { itemsList } = props;

  const flatTOC = useMemo(() => flattenTOC(itemsList[0].items || []), [itemsList]);

  const currentSection = useCurrentHeading('h1[id],h2[id]', {
    threshold: [0, 1],
    rootMargin: `-${styles.headerHeight} 0px -90% 0px`
  });

  if (flatTOC.length < 1) return null;

  return (
    <nav className={styles.toc}>
      <div className={styles.tocStack}>
        <h6 className={styles.tocHeader}>
          <GatsbyLink to='#' replace>
            On this page
          </GatsbyLink>
        </h6>

        {flatTOC.map(({ title, url }, index) => {
          return (
            <a
              className={cx(styles.link, currentSection === url.substring(1) && styles.activeItem)}
              key={index}
              href={url}>
              {title}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default TableOfContents;
