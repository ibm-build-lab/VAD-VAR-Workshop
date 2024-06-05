import 'server-only';
import { labs } from '../../../.velite';

/**
 * Generates list of locales based on content manifest
 *
 * @returns list of locales
 */
export default function generateLocaleList() {
  const localeSet = labs.reduce((acc, curr) => {
    const { locale } = curr;

    return acc.add(locale);
  }, new Set<string>([]));

  return Array.from(localeSet);
}
