import 'server-only';

import setWith from 'lodash/setWith';
import { labs, Lab } from '../../../.velite';

type FrontMatterData = Pick<
  Lab,
  'timeToComplete' | 'title' | 'updated' | 'toc'
>;

export interface SlugTree {
  title?: string;
  metadata?: FrontMatterData;
  slug?: string;
  children?: Record<string, SlugTree>;
}

/**
 * Generate tree-like structure composed of slugs.
 *
 * @returns tree-like structure containing slug metadata
 */
export default function generateSlugTree(): SlugTree {
  const tree: SlugTree['children'] = {};

  const sorted = labs.sort((a, b) => a.slug.localeCompare(b.slug));

  for (const item of sorted) {
    const { slug } = item;
    const directories = slug.split('/');

    const { title, updated, timeToComplete, toc, toc_tree } = item;
    // set metadata
    const value: Omit<Required<SlugTree>, 'children'> = {
      title: title || toc_tree[0].title || '',
      metadata: {
        title,
        updated,
        timeToComplete,
        toc
  ***REMOVED***,
      slug: `/${slug}`
***REMOVED***;

    const objectPath = directories.join('.children.');
    setWith<SlugTree>(tree, objectPath, value, Object);
  }

  return { children: tree };
}
