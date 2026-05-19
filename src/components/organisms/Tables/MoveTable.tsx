import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

type Props = {
  moveList?: {
    id?: number | null;
    level?: number | null;
    damageClass?: string | null;
    name?: string | null;
    type?: string | null;
    pp?: number | null;
  }[];
};

export const MoveTable: React.FC<Props> = (props) => {
  const { moveList } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>습득LV</TableCell>
            <TableCell>기술명</TableCell>
            <TableCell>유형</TableCell>
            <TableCell>속성</TableCell>
            <TableCell>PP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moveList?.map((item, index) => (
            <TableRow key={`moves-${index}`}>
              <TableCell>{item.level}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.damageClass}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.pp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
