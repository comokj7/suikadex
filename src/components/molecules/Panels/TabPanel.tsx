import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';

type Props = {
  children: ReactNode;
  value: number;
  index: number;
};

export const TabPanel: React.FC<Props> = (props) => {
  const { children, value, index, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};
