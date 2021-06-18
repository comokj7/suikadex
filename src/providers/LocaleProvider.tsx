import React, { useContext, useState } from 'react';
import { Locales } from '../enums';

type ContextValue = {
  locale: Locales;
  setLocale: (value: Locales) => void;
};

const LocaleContext = React.createContext<ContextValue>({
  locale: Locales.KOREAN,
  setLocale: (value: Locales) => {
    console.log(value);
  },
});

export const LocaleProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<Locales>(Locales.KOREAN);

  const value = {
    locale,
    setLocale,
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = (): ContextValue => {
  return useContext<ContextValue>(LocaleContext);
};
