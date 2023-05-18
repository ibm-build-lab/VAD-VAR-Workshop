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
        landingPageContent: `This site contains content for IBM Ecosystem partners (primarily our Value-Added Distributors and Value-Added Resellers) to build experiential sales skills with various IBM products.
          <br>
          <br>
          These workshops include hands-on labs that give you "show, not tell" experiential selling skills. The content will help you prepare for the [Level 3 Technical Sales badges](https://ibm.seismic.com/Link/Content/DCGX2M377qBM38TMpQ7DB3WVmQg8) for each technology.
          <br>
          <br>
          These workshops have been customized from the Technical Sales badge labs in order to fit the time and to add additional "Level 3+" skills to answer common questions not covered by the base labs nor the Technical Sales quiz.
          <br>
          <br>
          Currently, the workshops require additional content which introduces them in an in-person workshop setting and provides configuration detail that's not found directly in the repos. This content may be added at a later date.`,
        landingPageQuizAlert:
          'Pay special attention to information enclosed in notes like this because they will be important for the L3 quiz',
        landPageTileUpdated: 'Updated {{date}}',
        landPageTileTitle: 'Go to {{name}} lab materials',
        quizAlertDefault: 'Heads up! Parts of this section will be on the quiz.'
  ***REMOVED***
***REMOVED***,
    es: {
      translation: {
        landingPageTitle: 'Talleres de Venta Experiencial para Socios del Ecosistema IBM',
        landingPageContent: `Este sitio contiene contenido para que los socios del Ecosistema IBM (principalmente nuestros Distribuidores de Valor Añadido y Revendedores de Valor Añadido) desarrollen habilidades de ventas experienciales con varios productos IBM.
          <br>
          <br>
          Estos talleres incluyen laboratorios prácticos que le proporcionarán habilidades de venta experimental "mostrar, no contar". El contenido le ayudará a prepararse para las [insignias de ventas técnicas de nivel 3 de cada tecnología](https://ibm.seismic.com/Link/Content/DCGX2M377qBM38TMpQ7DB3WVmQg8).
          <br>
          <br>
          Estos talleres se han adaptado a partir de los laboratorios de la insignia de ventas técnicas para ajustarse al tiempo disponible y añadir habilidades adicionales de "Nivel 3+" para responder a preguntas comunes no cubiertas por los laboratorios básicos ni por el cuestionario de ventas técnicas.
          <br>
          <br>
          Actualmente, los talleres requieren un contenido adicional que los introduzca en un entorno de taller presencial y proporcione detalles de configuración que no se encuentran directamente en los repos. Este contenido podrá añadirse más adelante.`,
        landingPageQuizAlert:
          'Presta especial atención a la información incluida en este tipo de notas, ya que serán importantes para el examen L3.',
        landPageTileUpdated: 'Actualizada {{date}}',
        landPageTileTitle: 'Ir a los materiales de laboratorio de IBM {{name}}',
        quizAlertDefault: 'Atención! Partes de esta sección estarán en el cuestionario.'
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
