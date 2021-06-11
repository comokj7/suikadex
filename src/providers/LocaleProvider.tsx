import React, { useContext, useState } from 'react';
import { Locales } from '../enums';

type Props = {
  locale: Locales;
};

type ContextValue = {
  locale?: Locales;
  setLocale?: React.Dispatch<React.SetStateAction<Locales>>;
};

const LocaleContext = React.createContext<ContextValue>({});

export const LocaleProvider: React.FC<Props> = ({ children, ...props }) => {
  const [locale, setLocale] = useState<Locales>(props.locale);

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
