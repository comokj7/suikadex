import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core';

import { ApiProvider, LocaleProvider } from './providers';
import { Router } from './router';

export const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <ApiProvider>
          <Router />
        </ApiProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
};
