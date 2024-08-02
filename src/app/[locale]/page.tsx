import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import FragmentLoader from '#/components/custom/FragmentLoader';
import NavTile from '#/components/custom/NavTile';
import TileGrid from '#/components/custom/TileGrid';
import { QuizAlert } from '#/components/shortcodes';
import { PageHeader } from '#/components/ui';
import { SLUG_MAP } from '#/lib/velite';
import { SLUG_TREE } from '#/lib/velite';
import styles from './page.module.scss';

interface PageProps {
  params: { locale: string };
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
    return { locale: locale! };
  });
}

export default async function LandingPage(props: PageProps) {
  const {
    params: { locale }
  } = props;

  unstable_setRequestLocale(locale);
  const t = await getTranslations('LandingPage');

  return (
    <>
      <article className={styles.article}>
        <PageHeader>{t('title')}</PageHeader>
        <QuizAlert>{t('alert')}</QuizAlert>
        <FragmentLoader name='homepage' />

        <TileGrid>
          {Object.values(SLUG_TREE.children![locale].children!).map(
            (item, idx) => {
              const { slug } = item;

              return <NavTile prefix={false} to={slug!} recursive key={idx} />;
        ***REMOVED***
  ***REMOVED***}
        </TileGrid>
      </article>
    </>
  );
}
