import 'server-only';

import { getLocale } from 'next-intl/server';
import { SLUG_MAP } from '#/lib/velite';
import { labs } from '#velite';
import ClientNavTile from './ClientNavTile';

interface NavTileProps {
  /**
   * locale agnostic slug to lab content
   */
  to: string;
  /**
   * Whether to not render description inside tile
   * Should be formatted without leading `/`
   */
  blank?: boolean;
  /**
   * Content rendered within tag. Will replace description if used.
   */
  children?: React.ReactNode;
  /**
   * Whether children pages should be added to completion time tag
   */
  recursive?: boolean;
  /**
   * Whether to prefix `to` value with locale
   */
  prefix?: boolean;
}

// TODO add recursive calcluation of time and date
function getItem(slug: string, recursive: boolean) {
  const item = SLUG_MAP[slug];

  if (!item) throw Error(`item with slug ${slug} does not exist`);

  const { title, timeToComplete, updated, toc_tree, desc } = item;

  const lastUpdated = !recursive
    ? updated
    : labs
        .filter((i) => i.slug.startsWith(slug) && i.updated)
        .sort((a, b) => Date.parse(b.updated!) - Date.parse(a.updated!))[0]
        .updated;

  const totalTime = !recursive
    ? timeToComplete
    : labs
        .filter((i) => i.slug.startsWith(slug))
        .reduce((acc, { timeToComplete = 0 }) => acc + timeToComplete, 0);

  return {
    desc,
    title: title || toc_tree[0].title,
    timeToComplete: totalTime,
    updated: lastUpdated
  };
}

export default async function NavTile(props: NavTileProps) {
  const {
    to,
    children,
    blank = false,
    recursive = false,
    prefix = true
  } = props;
  const locale = await getLocale();

  const slug = [prefix ? locale : '', ...to.split('/')]
    .filter((i) => i)
    .join('/');
  const { title, timeToComplete, updated, desc } = getItem(slug, recursive);
  const content = blank ? null : children || (desc && <p>{desc}</p>);

  return (
    <ClientNavTile
      to={`/${slug}`}
      title={title!}
      timeToComplete={timeToComplete}
      updated={updated}>
      {content}
    </ClientNavTile>
  );
}
