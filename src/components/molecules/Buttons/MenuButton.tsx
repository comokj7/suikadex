import React from 'react';
import { IconButton } from '@material-ui/core';
import { Menu } from 'mdi-material-ui';
import styled from '@emotion/styled';

const StyledIconButton = styled(IconButton)`
  margin-right: 20px;
`;

export const MenuButton: React.FC = () => {
  return (
    <StyledIconButton edge="start">
      <Menu />
    </StyledIconButton>
  );
};
