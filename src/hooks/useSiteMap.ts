import buildSiteMap, { MenuItem } from '@helpers/buildSiteMap';
import useCurrentLanguage from './useCurrentLanguage';
import { useEffect, useState } from 'react';

const useSiteMap = () => {
  const [siteMap, setSiteMap] = useState<MenuItem[]>([]);
  const currentLanguage = useCurrentLanguage();
  const fullSiteMap = buildSiteMap();

  useEffect(() => {
    setSiteMap(() =>
      (fullSiteMap.find((map) => map.root == currentLanguage)?.children || []).sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    );
  }, [currentLanguage]);

  return siteMap;
};

export default useSiteMap;
