import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core';

import { Locales } from './enums';
import { ApiProvider, LocaleProvider } from './providers';
import { Router } from './router';

export const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider locale={Locales.KOREAN}>
        <ApiProvider>
          <Router />
        </ApiProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
};
