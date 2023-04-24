import React, { createContext, useMemo, useState } from 'react';

type theme = 'light' | 'dark';

interface ThemeProviderProps {
  children?: React.ReactNode;
  defaultLocale?: theme;
}

const LocaleContext = createContext({
  currentLocale: 'en' as string,
  setLocale: (() => null) as React.Dispatch<React.SetStateAction<string>>
});

const LocaleProvider: React.FC<ThemeProviderProps> = ({ children, defaultLocale = 'en' }) => {
  const [currentLocale, setLocale] = useState(defaultLocale);
  const memoLocale = useMemo(
    () => ({
      currentLocale,
      setLocale
    }),
    [currentLocale]
  );

  return React.createElement(LocaleContext.Provider, { value: memoLocale }, children);
};

export default LocaleContext;
export { LocaleProvider };
