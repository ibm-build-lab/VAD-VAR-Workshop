import { HeaderGlobalAction } from '@carbon/react';
import { AsleepFilled, LightFilled } from '@carbon/react/icons';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { createElement, useEffect, useState } from 'react';

/**
 * Displays header action that allows for theme switch
 */
export default function ToggleThemeAction() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const t = useTranslations('UIShell.Header.themeSwitcher');

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <HeaderGlobalAction
      aria-label={t('label')}
      tooltipAlignment='end'
      onClick={toggleTheme}>
      {createElement(resolvedTheme === 'dark' ? LightFilled : AsleepFilled, {
        size: 20
  ***REMOVED***)}
    </HeaderGlobalAction>
  );
}
