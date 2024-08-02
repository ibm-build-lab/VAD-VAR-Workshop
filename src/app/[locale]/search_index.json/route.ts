import 'server-only';

import { toHtml } from 'hast-util-to-html';
import lunr from 'lunr';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toHast } from 'mdast-util-to-hast';
import { toString } from 'mdast-util-to-string';
import MiniSearch from 'minisearch';
import remarkBreaks from 'remark-breaks';
import slugify from 'slugify';
import { findAfter } from 'unist-util-find-after';
import { remove } from 'unist-util-remove';
import { CONTINUE, visit } from 'unist-util-visit';
import { SUPPORTED_LOCALES } from '#i18n-config';
import { labs } from '../../../../.velite';

export const dynamic = 'error';

export interface SearchItem {
  id: number;
  page: string;
  title: string;
  text: string;
  location: string;
}

interface SearchIndexParams {
  locale: string;
}

/**
 * SSG function to determine slugs to prerender
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export function generateStaticParams(): SearchIndexParams[] {
  return SUPPORTED_LOCALES.map((l) => ({ locale: l }));
}

// eslint-disable-next-line no-unused-vars
function generateLunrIndex(docs: SearchItem[]) {
  // create prebuilt search index
  const idx = lunr((b) => {
    b.ref('id');
    b.field('location');
    b.field('title', { boost: 10 });
    b.field('text');

    b.metadataWhitelist = ['position'];

    for (const d of docs) {
      b.add(d);
***REMOVED***
  }).toJSON();

  return idx;
}

function generateMiniSearchIndex(docs: SearchItem[]) {
  const idx = new MiniSearch<SearchItem>({
    fields: ['title', 'text'],
    storeFields: ['title', 'text', 'location', 'page']
  });

  idx.addAll(docs);
  return idx.toJSON();
}

/**
 * Statically generated routes
 * Essentially creates a set of static JSON files meant to act as search indexes
 *
 * @see
 */
export async function GET(
  _req: unknown,
  { params }: { params: SearchIndexParams }
) {
  const { locale } = params;

  let c = 0;
  const docs: SearchItem[] = [];
  for (const lab of labs.filter((l) => l.locale === locale)) {
    const { raw, slug, title: pageTitle } = lab;

    const tree = fromMarkdown(raw);

    // for every heading
    visit(tree, 'heading', (node, index, parent) => {
      const start = node;
      const startIndex = index;

      if (parent === undefined) return CONTINUE;

      // find next heading
      const endNode = findAfter(parent!, start, (n) => n.type === 'heading');
      const endIndex = parent.children.findIndex((el) =>
        Object.is(el, endNode)
      );

      // content between headings
      const between = parent.children.slice(
        startIndex! + 1,
        endIndex > 0 ? endIndex : undefined
      );

      const rBreak = remarkBreaks();

      type Root = Parameters<typeof rBreak>[0];

      const contentRoot: Root = {
        type: 'root',
        children: between
  ***REMOVED***;

      rBreak(contentRoot);
      remove(contentRoot, 'image');

      const title = toString(node);

      const content = toHtml(
        toHast({
          type: 'root',
          children: between
    ***REMOVED***)
      );

      docs.push({
        id: c,
        page: pageTitle,
        title,
        text: content,
        location: `/${slug}#${slugify(title, { lower: true })}`
  ***REMOVED***);

      c++;
***REMOVED***);
  }

  const idx = generateMiniSearchIndex(docs);
  return Response.json(idx);
}
