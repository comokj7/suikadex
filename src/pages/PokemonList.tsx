import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from '@emotion/styled';
import {
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import { useDebouncedCallback } from 'use-debounce';

import { ContentContainer, Image, ScreenContainer } from '../components/atoms';
import { Loading, MenuButton } from '../components/molecules';
import { AppBar } from '../components/organisms';
import { Locales } from '../enums';
import { ApiPokemonListItem, ApiSpecyName } from '../interfaces';
import { useGetPokemonsQuery } from '../graphql/generated/schemas';
import { useLocale } from '../providers';
import { enum2array, filterLocaleName } from '../utils/convertUtil';

const FilterGrid = styled(Grid)`
  margin-bottom: 20px;
`;

const StyledSearchBar = styled(SearchBar)`
  height: 100%;
`;

const SelectFormControl = styled(FormControl)`
  margin-left: 20px;
  min-width: 150px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const StyledList = styled(List)`
  height: 100%;
  overflow-y: scroll;
`;

export const PokemonList: React.FC = () => {
  const history = useHistory();
  const { locale } = useLocale();
  const [keyword, setKeyword] = useState<string>();
  const [pokemons, setPokemons] = useState<ApiPokemonListItem[]>();
  const [type1, setType1] = useState<number>(0);
  const [type2, setType2] = useState<number>(0);
  const { loading, error, data } = useGetPokemonsQuery({
    variables: { locales: enum2array(Locales) },
  });

  const debounce = useDebouncedCallback((value) => {
    setKeyword(value);
  }, 1000);

  useEffect(() => {
    const filtered = data?.pokemon_v2_pokemon.filter((pokemon) => {
      // 키워드 체크
      let keywordMatched = false;

      if (Number(keyword)) {
        // 전국도감 번호 체크
        keywordMatched =
          pokemon.pokemon_v2_pokemonspecy?.id === Number(keyword);
      } else {
        // 이름 체크
        const names =
          pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesnames.map(
            (specy) => specy.name
          );
        keywordMatched = Boolean(
          names?.find((name) => name.includes(keyword ?? ''))
        );
      }

      // 속성 체크
      const types = pokemon.pokemon_v2_pokemontypes;
      const type1Matched =
        type1 === 0 ||
        Boolean(types.find((type) => type.pokemon_v2_type?.id === type1));
      const type2Matched =
        type2 === 0 ||
        Boolean(types.find((type) => type.pokemon_v2_type?.id === type2));

      return keywordMatched && type1Matched && type2Matched;
    });
    setPokemons(filtered);
  }, [data, keyword, type1, type2]);

  if (loading) return <Loading />;
  if (error) return <Typography>{`${error}`}</Typography>;

  const filteredTypeList = data?.pokemon_v2_typename.filter(
    (type) => type.language_id === locale
  );

  const goPokemonDetail = (no: number) => {
    history.push(`/pokemon/${no}`);
  };

  const handleChangeKeyword = (value: string) => {
    debounce(value);
  };

  const handleClearKeyword = () => {
    setKeyword(undefined);
  };

  const handleChangeType1 = (event: ChangeEvent<{ value: unknown }>) => {
    setType1(Number(event.target.value));
  };

  const handleChangeType2 = (event: ChangeEvent<{ value: unknown }>) => {
    setType2(Number(event.target.value));
  };

  return (
    <ScreenContainer>
      <AppBar
        leftButton={<MenuButton />}
        title="포켓몬 리스트"
        randomRange={data?.pokemon_v2_pokemon.length ?? 0}
      />
      <ContentContainer>
        <FilterGrid container direction="row">
          <StyledSearchBar
            value={keyword}
            placeholder="전국도감 번호 or 이름"
            onChange={handleChangeKeyword}
            onCancelSearch={handleClearKeyword}
          />
          <SelectFormControl variant="filled">
            <InputLabel id="label-type-1">속성1</InputLabel>
            <Select
              id="select-type-1"
              labelId="label-type-1"
              displayEmpty
              value={type1}
              onChange={handleChangeType1}>
              <MenuItem value={0}>전체</MenuItem>
              {filteredTypeList?.map((type) => (
                <MenuItem key={type.id} value={type.type_id ?? 0}>
                  {type.name}
                </MenuItem>
              ))}
            </Select>
          </SelectFormControl>
          <SelectFormControl variant="filled">
            <InputLabel id="select-type-2">속성2</InputLabel>
            <Select
              id="select-type-2"
              labelId="select-type-2"
              displayEmpty
              value={type2}
              onChange={handleChangeType2}>
              <MenuItem value={0}>전체</MenuItem>
              {filteredTypeList?.map((type) => (
                <MenuItem key={type.id} value={type.type_id ?? 0}>
                  {type.name}
                </MenuItem>
              ))}
            </Select>
          </SelectFormControl>
        </FilterGrid>
        <FilterGrid container direction="row"></FilterGrid>
        <StyledList>
          {pokemons?.map((pokemon) => {
            const names =
              pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesnames;
            return (
              <ListItem
                key={pokemon?.id}
                onClick={() => goPokemonDetail(pokemon.id)}>
                <Grid container item xs={12}>
                  <Grid container item xs={2} justify="center">
                    <ImageContainer>
                      <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`}
                      />
                    </ImageContainer>
                  </Grid>
                  <Grid container item xs={10} alignItems="center">
                    <Typography>
                      {
                        (filterLocaleName(names, locale)[0] as ApiSpecyName)
                          .name
                      }
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            );
          })}
        </StyledList>
      </ContentContainer>
    </ScreenContainer>
  );
};
