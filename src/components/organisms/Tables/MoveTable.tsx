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
    name?: string | null;
  }[];
};

export const MoveTable: React.FC<Props> = (props) => {
  const { moveList } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>LV</TableCell>
            <TableCell>기술명</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moveList?.map((item, index) => (
            <TableRow key={`moves-${index}`}>
              <TableCell>{item.level}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
