import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ApiProvider, LocaleProvider } from './providers';
import { Router } from './router';

export const App: React.FC = () => {
  const theme = createTheme();

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
