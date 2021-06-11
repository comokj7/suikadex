import React, { ReactNode, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import axios from 'axios';

import {
  Button,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import styled from '@emotion/styled';

import { useGetPokemonQuery } from '../graphql/generated/schemas';
import { Locales } from '../enums';
import { TypeChip } from '../components/atoms';
import { SpriteGrid, TabPanel } from '../components/molecules';
import {
  ApiSpecyName,
  ApiTypeName,
  Efficacy,
  EvolutionChain,
  Sprites,
} from '../interfaces';
import {
  enum2array,
  filterLocaleName,
  naturalMoveFilter,
} from '../utils/convertUtil';
import {
  AbilityTable,
  EvolutionChains,
  FlavorTable,
  MoveTable,
  TypeEfficacyTable,
} from '../components/organisms';
import { useLocale } from '../providers/LocaleProvider';
import { ApiEvolution } from '../interfaces';

type PageParameter = {
  no: string;
};

const PageContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 10px;
`;

const StyledTabPanel = styled(TabPanel)`
  flex: 1 auto;
  width: 100%;
  height: 50vh;
  overflow-y: auto;
`;

export const PokemonDetail: React.FC = () => {
  const history = useHistory();
  const { no } = useParams<PageParameter>();
  const { locale, setLocale } = useLocale();
  const [shiny, setShiny] = useState<boolean>(false);
  const [sprites, setSprites] = useState<Sprites>();
  const [tab, setTab] = useState<number>(0);

  const { loading, error, data } = useGetPokemonQuery({
    variables: { no: Number.parseInt(no), locales: enum2array(Locales) },
  });

  const getSprites = async (no: string) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${no}`);
    setSprites(res.data as Sprites);
  };

  useEffect(() => {
    getSprites(no);
  }, [no]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{`${error}`}</Typography>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTabChange = (_: React.ChangeEvent<ReactNode>, newTab: any) => {
    setTab(newTab);
  };

  const handleMoveTo = (id?: number) => {
    history.push(`/pokemon/${id}`);
  };

  const a11yProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  const pokemonInfo = data?.pokemon_v2_pokemon[0];
  const name = filterLocaleName(
    pokemonInfo?.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesnames,
    locale
  )[0]?.name;
  const specy = pokemonInfo?.pokemon_v2_pokemonspecy;
  const types = pokemonInfo?.pokemon_v2_pokemontypes;
  const height = ((pokemonInfo?.height ?? 0) / 10).toFixed(1);
  const weight = ((pokemonInfo?.weight ?? 0) / 10).toFixed(1);
  const hasGenderDiff = specy?.has_gender_differences;
  const flavorTexts = filterLocaleName(
    specy?.pokemon_v2_pokemonspeciesflavortexts,
    locale
  );
  const moves = () => {
    const moves =
      pokemonInfo?.pokemon_v2_pokemonmoves.filter(naturalMoveFilter);

    return moves?.map((item) => {
      const name = filterLocaleName(
        item.pokemon_v2_move?.pokemon_v2_movenames,
        locale
      )[0].name;

      return {
        id: item.id,
        level: item.level,
        name,
      };
    });
  };
  const abilities = pokemonInfo?.pokemon_v2_pokemonabilities;
  const evolutionChain = specy?.pokemon_v2_evolutionchain;

  const convertEfficacies = () => {
    const efficacies = new Array<Efficacy>();

    types?.forEach((type) =>
      type.pokemon_v2_type?.pokemonV2TypeefficaciesByTargetTypeId.forEach(
        (efficacy) => {
          const efficacyId = efficacy.pokemon_v2_type?.id;
          const prev = efficacies.find((item) => item.id === efficacyId);

          if (prev) {
            const prevFactor = prev.factor ?? 0;
            const currentFactor = efficacy.damage_factor ?? 0;
            const sum = prevFactor + currentFactor;

            if (prevFactor === 0 || currentFactor === 0) {
              // 0은 다른 상성에 영향을 받지 않음
              prev.factor = 0;
            } else if (prevFactor === 100 || currentFactor === 100) {
              // 100은 다른 상성에 영향을 주지 않음
              prev.factor = sum - 100;
            } else if (sum >= 300) {
              // 상성치 합이 300 이상인 경우 약점으로 판정
              prev.factor = 200;
            } else if (sum === 250) {
              // 약점+내성인 경우에는 보통으로 판정
              prev.factor = 100;
            } else {
              // 그 외의 경우에는 강한 내성으로 판정
              prev.factor = 25;
            }
          } else {
            efficacies.push({
              id: efficacyId,
              name: filterLocaleName(
                efficacy.pokemon_v2_type?.pokemon_v2_typenames,
                locale,
                true
              )[0].name,
              factor: efficacy.damage_factor,
            });
          }
        }
      )
    );

    return efficacies;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createEvolutionConditions = (evolutions: ApiEvolution[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return evolutions.map((evolution: ApiEvolution) => ({
      trigger: evolution?.pokemon_v2_evolutiontrigger?.name,
      gender: evolution?.pokemon_v2_gender?.name,
      minLevel: evolution?.min_level,
      minHappiness: evolution?.min_happiness,
      minBeauty: evolution?.min_beauty,
      minAffection: evolution?.min_affection,
      timeOfDay: evolution?.time_of_day,
      useItem: filterLocaleName(
        evolution?.pokemon_v2_item?.pokemon_v2_itemnames,
        locale
      )[0]?.name,
      heldItem: filterLocaleName(
        evolution?.pokemonV2ItemByHeldItemId?.pokemon_v2_itemnames,
        locale
      )[0]?.name,
      tradePokemon: filterLocaleName(
        evolution?.pokemonV2PokemonspecyByTradeSpeciesId
          ?.pokemon_v2_pokemonspeciesnames,
        locale
      )[0]?.name,
      partyPokemon: filterLocaleName(
        evolution?.pokemonV2PokemonspecyByPartySpeciesId
          ?.pokemon_v2_pokemonspeciesnames,
        locale
      )[0]?.name,
      partyType: filterLocaleName(
        evolution.pokemonV2TypeByPartyTypeId?.pokemon_v2_typenames,
        locale
      )[0]?.name,
      move: filterLocaleName(
        evolution.pokemon_v2_move?.pokemon_v2_movenames,
        locale
      )[0]?.name,
      moveType: filterLocaleName(
        evolution.pokemon_v2_type?.pokemon_v2_typenames,
        locale
      )[0]?.name,
      where: {
        region: filterLocaleName(
          evolution?.pokemon_v2_location?.pokemon_v2_region
            ?.pokemon_v2_regionnames,
          locale
        )[0]?.name,
        location: filterLocaleName(
          evolution?.pokemon_v2_location?.pokemon_v2_locationnames,
          locale
        )[0]?.name,
      },
    }));
  };

  const convertEvolutionChain = () => {
    const result: EvolutionChain = [];
    const species = evolutionChain?.pokemon_v2_pokemonspecies;
    const firsts = species?.filter((item) => !item.evolves_from_species_id);

    firsts?.forEach((item) => {
      const name = filterLocaleName(
        item.pokemon_v2_pokemonspeciesnames,
        locale
      )[0].name;
      const evolutions = item.pokemon_v2_pokemonevolutions;

      result.push({
        id: item.id,
        name: name,
        conditions: createEvolutionConditions(evolutions),
      });
    });

    result.forEach((first) => {
      const seconds = species?.filter(
        (item) => item.evolves_from_species_id === first.id
      );

      first.next = seconds?.map((second) => {
        const evolutions = second.pokemon_v2_pokemonevolutions;

        return {
          id: second.id,
          name: filterLocaleName(
            second.pokemon_v2_pokemonspeciesnames,
            locale
          )[0].name,
          conditions: createEvolutionConditions(evolutions),
        };
      });

      first.next?.forEach((second) => {
        const thirds = species?.filter(
          (item) => item.evolves_from_species_id === second.id
        );

        second.next = thirds?.map((third) => {
          const evolutions = third.pokemon_v2_pokemonevolutions;

          return {
            id: third.id,
            name: filterLocaleName(third.pokemon_v2_pokemonspeciesnames)[0]
              ?.name,
            conditions: createEvolutionConditions(evolutions),
          };
        });
      });
    });

    return result;
  };

  return (
    <PageContainer>
      <Grid container direction="row">
        <Grid container item xs={4}>
          <Grid item xs={12}>
            <Paper>{`NO. ${'00'.concat(no).slice(-3)}`}</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>{name}</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              {
                (
                  filterLocaleName(
                    specy?.pokemon_v2_pokemonspeciesnames,
                    locale
                  )[0] as ApiSpecyName
                )?.genus
              }
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {types?.map((item, index) => {
              const typeName = (
                filterLocaleName(
                  item.pokemon_v2_type?.pokemon_v2_typenames,
                  locale,
                  true
                )[0] as ApiTypeName
              )?.name;
              return (
                <TypeChip
                  key={`types-${index}`}
                  typeId={item.pokemon_v2_type?.id}
                  typeName={typeName}
                />
              );
            })}
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Grid container item xs={12}>
                <Grid item xs={6}>
                  키
                </Grid>
                <Grid item xs={6}>{`${height}m`}</Grid>
                <Grid item xs={6}>
                  몸무게
                </Grid>
                <Grid item xs={6}>{`${weight}kg`}</Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container item xs={12} justify="flex-end">
            <Button onClick={() => setShiny(!shiny)}>이로치</Button>
          </Grid>
        </Grid>
        <Grid container item xs={8}>
          <Grid container item xs={12} justify="flex-end">
            <Button
              variant="contained"
              onClick={() => {
                setLocale!(Locales.KOREAN);
              }}>
              한
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setLocale!(Locales.JAPANESE);
              }}>
              日
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setLocale!(Locales.ENGLISH);
              }}>
              Eng
            </Button>
          </Grid>
          <SpriteGrid
            shiny={shiny}
            femaleRate={specy?.gender_rate}
            hasGenderDiff={hasGenderDiff}
            sprites={sprites}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} direction="row" alignContent="flex-start">
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="설명" {...a11yProps(0)} />
          <Tab label="기술" {...a11yProps(1)} />
          <Tab label="특성" {...a11yProps(2)} />
          <Tab label="상성" {...a11yProps(3)} />
          <Tab label="진화" {...a11yProps(4)} />
        </Tabs>
        <StyledTabPanel value={tab} index={0}>
          <FlavorTable flavorTextList={flavorTexts} />
        </StyledTabPanel>
        <StyledTabPanel value={tab} index={1}>
          <MoveTable moveList={moves()} />
        </StyledTabPanel>
        <StyledTabPanel value={tab} index={2}>
          <AbilityTable abilityList={abilities} />
        </StyledTabPanel>
        <StyledTabPanel value={tab} index={3}>
          <TypeEfficacyTable efficacyList={convertEfficacies()} />
        </StyledTabPanel>
        <StyledTabPanel value={tab} index={4}>
          <EvolutionChains
            evolutionChains={convertEvolutionChain()}
            handleMoveTo={handleMoveTo}
          />
        </StyledTabPanel>
      </Grid>
    </PageContainer>
  );
};
