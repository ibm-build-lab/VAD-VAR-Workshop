import { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';
import useAllMDXNodes from './useAllMDXNodes';
import { cleanPathString } from '../helpers/helpers.mjs';
import { SupportedLanguage, supportedLangs } from '../../i18n';

const useSupportedLanguages = () => {
  const [supported, setSupported] = useState<SupportedLanguage[]>([]);
  const nodes = useAllMDXNodes();
  const { pathname } = useLocation();

  useEffect(() => {
    const path = cleanPathString(pathname).split('/').slice(1).join('/');

    if (!path && pathname === '/') {
      setSupported(supportedLangs);
      return;
    }

    const matchRegex = new RegExp(`^.*/${path}$`);
    const langs = nodes
      .map((node) => node.fields.slug)
      .filter((slug: string) => {
        return matchRegex.test(slug);
      })
      .map((slug: string) => slug.split('/')[0]);
    setSupported(supportedLangs.filter((lng) => langs.includes(lng.id)));
  }, [pathname]);

  return supported;
};

export default useSupportedLanguages;
