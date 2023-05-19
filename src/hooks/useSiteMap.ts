import { useEffect, useState } from 'react';
import buildSiteMap, { MenuItem } from '@helpers/buildSiteMap';
import useCurrentLanguage from './useCurrentLanguage';

const useSiteMap = () => {
  const [siteMap, setSiteMap] = useState<MenuItem[]>([]);
  const currentLanguage = useCurrentLanguage();
  const fullSiteMap = buildSiteMap();

  useEffect(() => {
    setSiteMap(() =>
      (fullSiteMap.find((map) => map.root == currentLanguage)?.children || [])
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a) => (a.children.length === 0 ? -1 : 0))
    );
  }, [currentLanguage]);

  return siteMap;
};

export default useSiteMap;
