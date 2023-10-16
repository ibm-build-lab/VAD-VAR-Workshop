import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as translations from './translations';

export interface SupportedLanguage {
  id: string;
  label: string;
  dateFormat: string;
}

export type Lang = 'en' | 'es';

export const DEFAULT_LOCALE: Lang = 'en';

const supportedLangsDict: Record<Lang, Omit<SupportedLanguage, 'id'>> = {
  en: {
    label: 'English',
    dateFormat: 'en-US'
  },
  es: {
    label: 'Español',
    dateFormat: 'es-ES'
  }
};

const supportedLangsArr: SupportedLanguage[] = Object.keys(supportedLangsDict).map((key) => {
  return {
    id: key,
    ...supportedLangsDict[key as Lang]
  };
});

i18n.use(initReactI18next).init({
  fallbackLng: DEFAULT_LOCALE,
  debug: true,
  resources: {
    en: {
      translation: translations.en
***REMOVED***,
    es: {
      translation: translations.es
***REMOVED***
  },
  interpolation: {
    escapeValue: false
  }
});

i18n.services.formatter?.addCached('formatDate', (lng = DEFAULT_LOCALE) => {
  const { dateFormat } = supportedLangsDict[lng as Lang];
  return (value) => new Date(value).toLocaleDateString(dateFormat, { timeZone: 'EST' });
});

export { supportedLangsDict, supportedLangsArr };
export default i18n;
