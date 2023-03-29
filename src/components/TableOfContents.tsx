import * as styles from '../styles/components/TableOfContents.module.scss';
import React from 'react';
import { ProgressIndicator, ProgressStep } from '@carbon/react';
import { navigate } from 'gatsby';

interface TOCItem {
  title: string;
  url: string;
  items?: TOCItem[];
}

interface TableOfContentsProps {
  itemsList: TOCItem[];
  depth?: number;
}

const onClickItem = (hashUrl: string) => {
  navigate(hashUrl);
};

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
            <ProgressStep onClick={() => onClickItem(url)} label={title}></ProgressStep>
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
      <ProgressIndicator vertical>
        <TableOfContentsItems itemsList={itemsList[0].items || []} />
      </ProgressIndicator>
    </nav>
  );
};

export default TableOfContents;
