import 'server-only';

import generateMap from './generate-map';

const SLUG_MAP = generateMap();

interface BreadCrumb {
  /**
   * URL slug to item
   */
  slug: string;
  /**
   * Title of page
   */
  title: string;
}

/**
 * will resolve slug into list of index slugs from input ath
 * @param slug
 * @returns
 */
export default function collectBreadcrumbs(
  slug: string | string[]
): BreadCrumb[] {
  let crumbs = slug;
  if (!Array.isArray(crumbs)) crumbs = crumbs.split('/');

  return crumbs
    .map((part, index) => {
      const slug = (crumbs as string[]).slice(0, index + 1).join('/');
      const item = SLUG_MAP[slug];
      return { slug: `/${slug}`, title: item?.title || part };
***REMOVED***)
    .slice(1);
}
