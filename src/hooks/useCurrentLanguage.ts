import { useLocation } from '@reach/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cleanPathString } from '../helpers/helpers.mjs';

const useCurrentLanguage = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = cleanPathString(pathname).split('/')[0];
    i18n.changeLanguage(lng);
  }, [pathname]);

  return i18n.language;
};

export default useCurrentLanguage;
