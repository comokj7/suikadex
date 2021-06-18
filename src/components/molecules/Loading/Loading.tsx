import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

export const Loading: React.FC = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress />
    </Backdrop>
  );
};
