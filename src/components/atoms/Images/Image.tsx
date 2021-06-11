import React from 'react';
import { CircularProgress } from '@material-ui/core';
import MaterialImage from 'material-ui-image';

type Props = {
  src?: string;
};

export const Image: React.FC<Props> = (props) => {
  const { src = '' } = props;

  return <MaterialImage src={src} loading={<CircularProgress />} />;
};
