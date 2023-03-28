import * as styles from '../styles/components/TableOfContents.module.scss';
import React from 'react';

interface TOCItem {
  title: string;
  url: string;
  items?: TOCItem[];
}

interface TableOfContentsProps {
  itemsList: TOCItem[];
  depth?: number;
}

const TableOfContentsItems = (props: TableOfContentsProps) => {
  const { itemsList, depth = 0 } = props;

  return (
    <>
      {itemsList.map((item, index: number) => {
        const { items, title, url } = item;
        return React.createElement(
          React.Fragment,
          { key: index },
          <>
            <a href={url}>{title}</a>
            {items && <TableOfContentsItems itemsList={items} depth={depth + 1} />}
          </>
***REMOVED***;
  ***REMOVED***)}
    </>
  );
};

const TableOfContents = (props: TableOfContentsProps) => {
  const { itemsList } = props;

  return (
    <nav className={styles.toc}>
      <h4>Table of Contents</h4>
      <TableOfContentsItems itemsList={itemsList[0].items || []} />
    </nav>
  );
};

export default TableOfContents;
