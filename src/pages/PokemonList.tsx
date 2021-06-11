import styled from '@emotion/styled';
import {
  Container,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Locales } from '../enums';
import { useGetPokemonsQuery } from '../graphql/generated/schemas';
import { ApiSpecyName } from '../interfaces';
import { useLocale } from '../providers/LocaleProvider';
import { enum2array, filterLocaleName } from '../utils/convertUtil';

const StyledContainer = styled(Container)`
  padding: 20px;
`;

const StyledSelect = styled(Select)`
  width: 50%;
`;

export const PokemonList: React.FC = () => {
  const history = useHistory();
  const { locale, setLocale } = useLocale();
  const [keyword, setKeyword] = useState<string>();
  const [type1, setType1] = useState<number>();
  const [type2, setType2] = useState<number>();
  const { loading, error, data } = useGetPokemonsQuery({
    variables: { locales: enum2array(Locales) },
  });

  const goPokemonDetail = (no: number) => {
    history.push(`/pokemon/${no}`);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{`${error}`}</Typography>;

  return (
    <StyledContainer>
      <SearchBar placeholder="전국도감 번호 or 이름" />
      <StyledSelect placeholder="속성1" displayEmpty>
        {data?.pokemon_v2_typename.map((type) => (
          <MenuItem key={type.id} value={type.type_id!}>
            {type.name}
          </MenuItem>
        ))}
      </StyledSelect>
      <StyledSelect placeholder="속성2" displayEmpty>
        {data?.pokemon_v2_typename.map((type) => (
          <MenuItem key={type.id} value={type.type_id!}>
            {type.name}
          </MenuItem>
        ))}
      </StyledSelect>
      <List>
        {data?.pokemon_v2_pokemon.map((pokemon) => {
          const names =
            pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesnames;

          return (
            <ListItem key={pokemon?.id}>
              <Typography onClick={() => goPokemonDetail(pokemon.id)}>
                {(filterLocaleName(names, locale)[0] as ApiSpecyName).name}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </StyledContainer>
  );
};
