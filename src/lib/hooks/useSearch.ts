'use client';

import MiniSearch, { SearchResult } from 'minisearch';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { SearchItem } from '#/app/[locale]/search_index.json/route';

export interface CustSearchResult extends SearchResult {
  page: string;
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Allow for search of static from static index file
 * @returns Object containing helper items for search
 */
export default function useSearch() {
  const [searchIndex, setIndex] = useState<MiniSearch<SearchItem>>();
  const [searchText, setSearchText] = useState<string>('');
  const [results, setResults] = useState<CustSearchResult[]>([]);
  const locale = useLocale();

  useEffect(() => {
    if (!locale) return;

    // load preindexed file from route
    fetch(`${BASE_PATH}/${locale}/search_index.json`).then(async (r) => {
      if (r.status !== 200) return;

      const serialIdx = await r.text();
      const idx = MiniSearch.loadJSON<SearchItem>(serialIdx, {
        fields: ['title', 'text'],
        storeFields: ['title', 'text', 'location', 'page']
      });

      setIndex(idx);
    });
  }, [locale]);

  useEffect(() => {
    if (!searchText || !searchIndex) {
      setResults([]);
      return;
    }
    const r = searchIndex.search(searchText);
    setResults(r as CustSearchResult[]);
  }, [searchText]);

  return {
    results,
    searchText,
    setSearchText
  };
}
