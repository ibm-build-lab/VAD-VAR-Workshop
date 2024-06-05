'use client';

import { redirect, RedirectType, usePathname } from 'next/navigation';
import { DEF_LOCALE, SUPPORTED_LOCALES } from '#i18n-config';

/**
 * Ran when `notFound` error runs
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 * @see https://nextjs.org/docs/app/api-reference/functions/not-found
 */
export default function NotFound() {
  const pathName = usePathname();
  const locale = pathName.split('/')[1];
  const finalLocale = SUPPORTED_LOCALES.includes(locale as any)
    ? locale
    : DEF_LOCALE;
  return redirect(`/${finalLocale}/not-found`, RedirectType.replace);
}
