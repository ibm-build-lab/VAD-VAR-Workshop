import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import baseMetadata from '#/shared-metadata';
import { DEF_LOCALE } from '#i18n-config';

/**
 * SEO metadata
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const metadata: Metadata = baseMetadata;

export default async function Home() {
  redirect(`/${DEF_LOCALE}`);
}
