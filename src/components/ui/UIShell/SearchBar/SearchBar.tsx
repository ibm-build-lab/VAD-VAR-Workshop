'use client';

import { ExpandableSearch } from '@carbon/react';
import { Document, TextAlignLeft } from '@carbon/react/icons';
import cx from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSearch, { CustSearchResult } from '#/lib/hooks/useSearch';
import styles from './SearchBar.module.scss';

type SearchMap = Record<string, CustSearchResult[]>;

export default function SearchBar() {
  const { results, setSearchText } = useSearch();
  const [expanded, setExpanded] = useState<boolean>(false);

  const [resultsMap, setResultsMap] = useState<SearchMap>({});

  useEffect(() => {
    if (results.length === 0) return;
    const t = results.reduce((acc, curr) => {
      const { page } = curr;
      if (acc[page] === undefined) acc[page] = [];
      acc[page].push(curr);
      return acc;
    }, {} as SearchMap);

    setResultsMap(t);
  }, [results]);

  return (
    <div
      className={styles.searchWrapper}
      onBlur={(e) =>
        setExpanded(
          !(
            e.relatedTarget !== e.currentTarget &&
            !e.currentTarget.contains(e.relatedTarget)
          )
        )
      }>
      <ExpandableSearch
        isExpanded={expanded}
        onFocus={() => setExpanded(true)}
        onChange={(s) => setSearchText(s.target.value)}
        className={styles.searchBar}
        size='lg'
        labelText='search site'
      />
      {expanded && (
        <div className={styles.resultsWrapper}>
          <div className={styles.resultsAmount}>
            {results.length} results found
          </div>
          {resultsMap &&
            Object.keys(resultsMap).map((k, idx) => {
              const items = resultsMap[k];

              return (
                <div
                  key={idx}
                  style={{ display: 'flex', flexDirection: 'column' }}>
                  <Link
                    onClick={() => setExpanded(false)}
                    href={items[0].location.split('#')[0]}
                    key={`res-${idx}`}
                    className={styles.searchResult}>
                    <span className={styles.resultTitle}>
                      <Document />
                      {k}
                    </span>
                  </Link>
                  {items.map((r) => {
                    return (
                      <Link
                        onClick={() => setExpanded(false)}
                        href={`${r.location}`}
                        key={r.id}
                        className={styles.searchResult}>
                        <span
                          className={cx(styles.subItem, styles.resultTitle)}>
                          <TextAlignLeft />
                          {r.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
