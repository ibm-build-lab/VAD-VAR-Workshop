import get from 'lodash/get';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { SlugTree } from '#/lib/velite/generate-tree';
import type { Locale } from '#i18n-config';

interface SupportedLocale {
  locale: Locale;
  pathname: string;
}

/**
 * Will determine current pages supported locales based on input tree
 * @returns {SupportedLocale[]} list of supported locales for current page with their paths
 */
export default function useSupportedLocales(sideBarTree: SlugTree) {
  const pathName = usePathname();
  const [supportedLocales, setSupportedLocales] = useState<SupportedLocale[]>(
    []
  );

  useEffect(() => {
    if (!sideBarTree) return;

    const splitPath = pathName.split('/').filter((i) => !!i);
    const locales: Locale[] = Object.keys(sideBarTree.children!) as Locale[];

    const supported: SupportedLocale[] = [];
    for (const locale of locales) {
      const objectPath = [locale, ...splitPath.slice(1)].join('.children.');
      const item = get(sideBarTree.children, objectPath, undefined);
      if (item !== undefined)
        supported.push({
          locale,
          pathname: ['', locale, ...splitPath.slice(1)].join('/')
    ***REMOVED***);
***REMOVED***

    setSupportedLocales(supported);
  }, [pathName]);

  return supportedLocales;
}
