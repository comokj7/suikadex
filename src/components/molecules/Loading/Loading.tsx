import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export const Loading: React.FC = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress />
    </Backdrop>
  );
};
