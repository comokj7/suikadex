import React from 'react';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

type Props = {
  title: string;
};

const StyledText = styled(Typography)`
  flex-grow: 1;
`;

export const PageTitle: React.FC<Props> = ({ title }) => {
  return <StyledText variant="h6">{title}</StyledText>;
};
