import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { Efficacy } from '../../../interfaces';
import { DamageFactors } from '../../../enums';
import { TypeChip } from '../../atoms';
import styled from '@emotion/styled';

type Props = {
  efficacyList: Efficacy[];
};

const StyledTableCell = styled(TableCell)`
  width: 20%;
`;

export const TypeEfficacyTable: React.FC<Props> = (props) => {
  const { efficacyList } = props;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={5} align="center">
              방어상성
            </TableCell>
          </TableRow>
          <TableRow>
            {DamageFactors.map((factor) => (
              <StyledTableCell key={`damage-factor-${factor}`} size="medium">
                {`x${factor}`}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {DamageFactors.map((factor) => (
              <StyledTableCell key={`damage-factor-types-${factor}`}>
                {efficacyList
                  .filter((item) => item.factor === factor * 100)
                  .map((item, index) => (
                    <TypeChip
                      key={`damage-factor-types-${factor}-${index}`}
                      typeId={item.id}
                      typeName={item.name}
                    />
                  ))}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
