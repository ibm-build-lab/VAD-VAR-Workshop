import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export interface SupportedLanguage {
  id: string;
  label: string;
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
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
    label: 'Espanol'
  }
];

export { supportedLangs };
export default i18n;
