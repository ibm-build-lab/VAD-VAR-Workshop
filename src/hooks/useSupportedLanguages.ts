import { useEffect, useState } from 'react';
import useAllMDXNodes from './useAllMDXNodes';
import { useLocation } from '@reach/router';
import { cleanPathString } from '../helpers/helpers';
import { SupportedLanguage, supportedLangs } from '../../i18n';

const useSupportedLanguages = () => {
  const [supported, setSupported] = useState<SupportedLanguage[]>([]);
  const nodes = useAllMDXNodes();
  const { pathname } = useLocation();

  useEffect(() => {
    const langs = nodes
      .map((node) => node.fields.slug)
      .filter((slug: string) => {
        const path = cleanPathString(pathname).split('/').slice(1);
        const matchRegex = new RegExp(`^.*/${path}$`);
        return matchRegex.test(slug);
      })
      .map((slug: string) => slug.split('/')[0]);

    setSupported(supportedLangs.filter((lng) => langs.includes(lng.id)));
  }, [pathname]);

  return supported;
};

export default useSupportedLanguages;
