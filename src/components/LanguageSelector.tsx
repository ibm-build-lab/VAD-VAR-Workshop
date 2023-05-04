import { Dropdown, Stack } from '@carbon/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';
import { cleanPathString } from '../helpers/helpers';
import { navigate } from 'gatsby';
import { EarthFilled } from '@carbon/react/icons';
import { useCurrentLanguage, useSupportedLanguages } from '../hooks';
import { SupportedLanguage, supportedLangs } from '../../i18n';

interface DropdownChangeEvent {
  selectedItem: SupportedLanguage;
}

const langById = (id: string) => supportedLangs.find((lng) => id === lng.id) || supportedLangs[0];

const LanguageSelector = () => {
  const currentLanguage = useCurrentLanguage();
  const location = useLocation();
  const [currentItem, setCurrentItem] = useState(langById(currentLanguage));
  const langs = useSupportedLanguages();

  const onChange = (evt: DropdownChangeEvent) => {
    const {
      selectedItem: { id }
***REMOVED*** = evt;
    const splitPat = cleanPathString(location.pathname).split('/');
    splitPat[0] = id;
    navigate(`/${splitPat.join('/')}`);
  };

  useEffect(() => {
    setCurrentItem(langById(currentLanguage));
  }, [currentLanguage]);

  return (
    <Stack gap={4} orientation='horizontal' as='li'>
      <EarthFilled size={20} fill='white' />
      <Dropdown
        onChange={onChange}
        disabled={langs.length <= 1}
        id='lang-dropdown-menu'
        size='sm'
        label='Select Language'
        items={langs}
        selectedItem={currentItem}
      />
    </Stack>
  );
};

export default LanguageSelector;
