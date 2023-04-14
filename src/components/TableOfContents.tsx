import * as styles from '../styles/components/TableOfContents.module.scss';
import React, { useEffect, useMemo, useState } from 'react';
import { ProgressIndicator, ProgressStep } from '@carbon/react';
import { navigate } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

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
  const { itemsList, currSection, maxDepth = 0 } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatTOC = useMemo(
    () =>
      flattenTOC(itemsList[0].items || []).filter(({ depth }) => depth < maxDepth || maxDepth <= 0),
    [maxDepth, itemsList]
  );

  useEffect(() => {
    setCurrentIndex((curr) => {
      const newIndex = flatTOC.findIndex(({ url = '#' }) => url.substring(1) === currSection);
      return newIndex >= 0 ? newIndex : curr;
***REMOVED***);
  }, [currSection]);

  if (flatTOC.length < 1) return null;

  return (
    <nav className={styles.toc}>
      <h6 className={styles.tocHeader}>
        <GatsbyLink to='#' replace>
          On this page
        </GatsbyLink>
      </h6>
      <ProgressIndicator
        vertical
        currentIndex={currentIndex}
        onChange={(t) => navigate(flatTOC[t].url, { replace: true })}>
        {flatTOC.map(({ title }, index) => {
          return <ProgressStep label={title} key={index} />;
    ***REMOVED***)}
      </ProgressIndicator>
    </nav>
  );
};

export default TableOfContents;
