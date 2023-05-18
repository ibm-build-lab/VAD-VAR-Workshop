import * as styles from './TableOfContents.module.scss';
import React, { useMemo } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import cx from 'classnames';

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
***REMOVED***);

    if (items && items.length > 0) flattenTOC(items, flatList, depth + 1);
  });

  return flatList;
};

const TableOfContents = (props: TableOfContentsProps) => {
  const { itemsList, currSection } = props;

  const flatTOC = useMemo(() => flattenTOC(itemsList[0].items || []), [itemsList]);

  if (flatTOC.length < 1) return null;

  // url.substring(1) === currSection && styles.activeItem
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
            <a className={cx(styles.link)} key={index} href={url}>
              {title}
            </a>
  ***REMOVED***;
    ***REMOVED***)}
      </div>
    </nav>
  );
};

export default TableOfContents;
