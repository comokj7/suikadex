import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { filterLocaleName } from '../../../utils/convertUtil';
import { useLocale } from '../../../providers/LocaleProvider';
import {
  ApiAbility,
  ApiAbilityFlavorText,
  ApiAbilityName,
} from '../../../interfaces';

type Props = {
  abilityList?: ApiAbility[];
};

export const AbilityTable: React.FC<Props> = (props) => {
  const { abilityList } = props;
  const { locale } = useLocale();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>특성</TableCell>
            <TableCell>효과</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {abilityList?.map((item, index) => {
            const names = item.ability?.abilitynames;
            const flavorTexts =
              item.ability?.abilityflavortexts;

            return (
              <TableRow key={`abilities-${index}`}>
                <TableCell>
                  {(filterLocaleName(names, locale)[0] as ApiAbilityName).name}
                </TableCell>
                <TableCell>
                  {
                    (
                      filterLocaleName(
                        flavorTexts,
                        locale
                      )[0] as ApiAbilityFlavorText
                    ).flavor_text
                  }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
