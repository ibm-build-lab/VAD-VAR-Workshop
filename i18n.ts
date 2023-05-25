import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as translations from './translations';

export interface SupportedLanguage {
  id: string;
  label: string;
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: translations.en
    },
    es: {
      translation: translations.es
    }
  },
  interpolation: {
    escapeValue: false
  }
});

const supportedLangs: SupportedLanguage[] = [
  {
    id: 'en',
    label: 'English'
  },
  {
    id: 'es',
    label: 'Español'
  }
];

export { supportedLangs };
export default i18n;
