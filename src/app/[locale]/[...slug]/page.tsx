import type { Metadata, ResolvingMetadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { PageHeader } from '#/components/ui';
import compileContent from '#/lib/mdx/compile-content';
import { SLUG_MAP } from '#/lib/velite';
import { generateMergedMetadata } from '#/shared-metadata';
import styles from './page.module.scss';

interface PageProps {
  params: { slug?: string[]; locale: string };
}

/**
 * SSG function to determine slugs to prerender
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export function generateStaticParams(): PageProps['params'][] {
  const slugs: string[] = Object.keys(SLUG_MAP);
  return slugs.map((slug) => {
    const splitSlug = slug.split('/');
    const locale = splitSlug.shift();
    return { slug: splitSlug, locale: locale! };
  });
}

/**
 * Generate SEO metadata
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export async function generateMetadata(
  props: PageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const {
    params: { slug = [], locale }
  } = props;

  const fullSlug = [locale, ...slug].join('/');
  const { title: t, toc_tree, updated, excerpt, desc } = SLUG_MAP[fullSlug];

  const title = t || toc_tree[0].title || undefined;
  const description = desc ? desc : excerpt;

  return generateMergedMetadata({
    title,
    description,
    alternates: {
      canonical: fullSlug
***REMOVED***,
    twitter: { title, description },
    openGraph: {
      type: 'article',
      title,
      description,
      url: fullSlug,
      locale,
      modifiedTime: updated
***REMOVED***
  });
}

export default async function LabPage(props: PageProps) {
  const {
    params: { slug = [], locale }
  } = props;

  unstable_setRequestLocale(locale);

  const fullSlug = [locale, ...slug].join('/');
  const { content, toc, frontmatter, breadcrumbs } = await compileContent(
    fullSlug,
    { h1: () => null }
  );

  return (
    <>
      <article className={styles.article}>
        <PageHeader {...frontmatter} breadcrumbs={breadcrumbs}>
          {toc[0].title || frontmatter.title}
        </PageHeader>
        {content}
      </article>
      {/** TODO: Implement next/prev logic */}
      {/* <PageNavFooter /> */}
    </>
  );
}
