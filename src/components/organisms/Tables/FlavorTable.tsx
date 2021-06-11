import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';

type Props = {
  flavorTextList?: Array<{
    id?: number | null;
    flavor_text?: string | null;
    pokemon_v2_version?: {
      id?: number | null;
      name?: string | null;
    } | null;
  }> | null;
};

export const FlavorTable: React.FC<Props> = (props) => {
  const { flavorTextList } = props;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>버전</TableCell>
            <TableCell>설명</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flavorTextList?.map((item, index) => (
            <TableRow key={`flavor-text-${index}`}>
              <TableCell>{item.pokemon_v2_version?.name}</TableCell>
              <TableCell>{item.flavor_text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
