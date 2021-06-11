import React from 'react';

import { Types } from '../../../enums';
import { Chip, createMuiTheme, ThemeProvider } from '@material-ui/core';
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

  const theme = createMuiTheme({
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
