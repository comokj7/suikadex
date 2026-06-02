import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import { ChevronLeft } from 'mdi-material-ui';
import styled from '@emotion/styled';

const StyledIconButton = styled(IconButton)`
  margin-right: 20px;
`;

export const BackButton: React.FC<IconButtonProps> = (props) => {
  return (
    <StyledIconButton {...props} edge="start">
      <ChevronLeft />
    </StyledIconButton>
  );
};
