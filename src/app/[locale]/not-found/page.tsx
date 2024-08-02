import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import NavTile from '#/components/custom/NavTile';
import TileGrid from '#/components/custom/TileGrid';
import { PageHeader } from '#/components/ui';
import { SLUG_TREE } from '#/lib/velite';
import { SUPPORTED_LOCALES } from '#i18n-config';
import styles from './page.module.scss';

interface FourOhFourProps {
  params: { locale: string };
}

/**
 * SSG function to determine slugs to prerender
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

/**
 * Localized 404 Error Page
 */
export default async function FourOhFour(props: FourOhFourProps) {
  const {
    params: { locale }
  } = props;

  unstable_setRequestLocale(locale);
  const t = await getTranslations('NotFound');
  const topLevelItems = Object.values(SLUG_TREE.children![locale].children!);

  return (
    <div>
      <PageHeader>404 - {t('title')}</PageHeader>
      <div>
        <p
          className={styles.message}
          dangerouslySetInnerHTML={{ __html: t('message') }}></p>
        <TileGrid>
          {topLevelItems.map((i, idx) => {
            return (
              i.slug && (
                <NavTile
                  key={idx}
                  to={i.slug.substring(1)}
                  prefix={false}
                  recursive
                />
      ***REMOVED***
    ***REMOVED***;
      ***REMOVED***)}
        </TileGrid>
      </div>
    </div>
  );
}
