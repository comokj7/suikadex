import React from 'react';
import { IconButton, IconButtonProps } from '@material-ui/core';
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
