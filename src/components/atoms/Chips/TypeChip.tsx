import React from 'react';

import { Types } from '../../../enums';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Chip } from '@mui/material';
import styled from '@emotion/styled';

type Prop = {
  typeId?: number;
  typeName?: string;
};

const StyledChip = styled(Chip)`
  color: white;
`;

export const TypeChip: React.FC<Prop> = (props) => {
  const { typeId, typeName } = props;
  const type = Types.find((item) => item.typeId === typeId);

  const theme = createTheme({
    palette: {
      primary: {
        main: type?.backgroundColor ?? '',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledChip color="primary" label={`${typeName}`} clickable />
    </ThemeProvider>
  );
};
