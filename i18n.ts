import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export interface SupportedLanguage {
  id: string;
  label: string;
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        landingPageTitle: 'Experiential Selling Workshops for IBM Ecosystem Partners',
        landPageTileUpdated: 'Updated {{date}}',
        landPageTileTitle: 'Go to {{name}} lab materials'
  ***REMOVED***
***REMOVED***,
    es: {
      translation: {
        landingPageTitle: 'Talleres de Venta Experiencial para Socios del Ecosistema IBM',
        landPageTileUpdated: 'Actualizada {{date}}',
        landPageTileTitle: 'Ir a los materiales de laboratorio de IBM {{name}}'
  ***REMOVED***
***REMOVED***
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
    label: 'Espanol'
  }
];

export { supportedLangs };
export default i18n;
