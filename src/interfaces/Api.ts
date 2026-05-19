import { Maybe } from 'graphql/jsutils/Maybe';
import {
  Evolutionchain,
  Pokemonspecies,
  Pokemonspeciesname,
  Pokemonevolution,
  Item,
  Itemname,
  Location,
  Locationname,
  Region,
  Regionname,
  Gender,
  Evolutiontrigger,
  Move,
  Movename,
  Type,
  Typename,
  Pokemon,
  Pokemonsprites,
  Pokemontype,
  Abilityflavortext,
  Abilityname,
  Movedamageclass,
  Movemeta,
  Movemetaailment,
  Movemetacategory,
  Pokemonability,
  Pokemonmove,
  Pokemonspeciesflavortext,
  Typeefficacy,
  Version,
} from '../graphql/generated/schemas';

export type ApiSpecy = { __typename?: 'pokemonspecies' } & Pick<
  Pokemonspecies,
  'id' | 'evolves_from_species_id'
> & {
    pokemonspeciesnames: ApiSpecyName[];
    pokemonevolutions: ApiEvolution[];
  };

export type ApiSpecyName = {
  __typename?: 'pokemonspeciesname';
} & Pick<
  Pokemonspeciesname,
  'id' | 'name' | 'genus' | 'language_id'
>;

export type ApiEvolutionChain = Maybe<
  { __typename?: 'evolutionchain' } & Pick<
    Evolutionchain,
    'id'
  > & {
      pokemonspecies: ApiSpecy[];
    }
>;

export type ApiLocationName = {
  __typename?: 'locationname';
} & Pick<Locationname, 'id' | 'language_id' | 'name'>;

export type ApiRegionName = {
  __typename?: 'regionname';
} & Pick<Regionname, 'id' | 'language_id' | 'name'>;

export type ApiTypeName = {
  __typename?: 'typename';
} & Pick<Typename, 'id' | 'language_id' | 'name'>;

export type ApiMoveName = {
  __typename?: 'movename';
} & Pick<Movename, 'id' | 'language_id' | 'name'>;

export type ApiItemName = {
  __typename?: 'itemname';
} & Pick<Itemname, 'id' | 'language_id' | 'name'>;

export type ApiEvolution = {
  __typename?: 'pokemonevolution';
} & Pick<
  Pokemonevolution,
  | 'id'
  | 'min_affection'
  | 'min_beauty'
  | 'min_happiness'
  | 'min_level'
  | 'time_of_day'
  | 'relative_physical_stats'
  | 'turn_upside_down'
  | 'needs_overworld_rain'
> & {
    item?: Maybe<
      { __typename?: 'item' } & Pick<Item, 'id'> & {
          itemnames: ApiItemName[];
        }
    >;
    location?: Maybe<
      { __typename?: 'location' } & Pick<
        Location,
        'id'
      > & {
          locationnames: ApiLocationName[];
          region?: Maybe<
            {
              __typename?: 'region';
            } & Pick<Region, 'id'> & {
                regionnames: Array<
                  {
                    __typename?: 'regionname';
                  } & Pick<Regionname, 'id' | 'language_id' | 'name'>
                >;
              }
          >;
        }
    >;
    gender?: Maybe<
      { __typename?: 'gender' } & Pick<
        Gender,
        'id' | 'name'
      >
    >;
    evolutiontrigger?: Maybe<
      {
        __typename?: 'evolutiontrigger';
      } & Pick<Evolutiontrigger, 'id' | 'name'>
    >;
    PokemonspecyByPartySpeciesId?: Maybe<
      {
        __typename?: 'pokemonspecies';
      } & Pick<Pokemonspecies, 'id'> & {
          pokemonspeciesnames: Array<
            {
              __typename?: 'pokemonspeciesname';
            } & Pick<
              Pokemonspeciesname,
              'id' | 'language_id' | 'name'
            >
          >;
        }
    >;
    PokemonspecyByTradeSpeciesId?: Maybe<
      {
        __typename?: 'pokemonspecies';
      } & Pick<Pokemonspecies, 'id'> & {
          pokemonspeciesnames: Array<
            {
              __typename?: 'pokemonspeciesname';
            } & Pick<
              Pokemonspeciesname,
              'id' | 'language_id' | 'name'
            >
          >;
        }
    >;
    ItemByHeldItemId?: Maybe<
      { __typename?: 'item' } & Pick<Item, 'id'> & {
          itemnames: Array<
            {
              __typename?: 'itemname';
            } & Pick<Itemname, 'id' | 'language_id' | 'name'>
          >;
        }
    >;
    move?: Maybe<
      { __typename?: 'move' } & Pick<Move, 'id'> & {
          movenames: Array<
            {
              __typename?: 'movename';
            } & Pick<Movename, 'id' | 'language_id' | 'name'>
          >;
          type?: Maybe<
            {
              __typename?: 'type';
            } & Pick<Type, 'id'> & {
                typenames: Array<
                  {
                    __typename?: 'typename';
                  } & Pick<Typename, 'id' | 'language_id' | 'name'>
                >;
              }
          >;
        }
    >;
    TypeByPartyTypeId?: Maybe<
      { __typename?: 'type' } & Pick<Type, 'id'> & {
          typenames: Array<
            {
              __typename?: 'typename';
            } & Pick<Typename, 'id' | 'language_id' | 'name'>
          >;
        }
    >;
    type?: Maybe<
      { __typename?: 'type' } & Pick<Type, 'id'> & {
          typenames: Array<
            {
              __typename?: 'typename';
            } & Pick<Typename, 'id' | 'language_id' | 'name'>
          >;
        }
    >;
  };

export type ApiPokemonSimple = { __typename?: 'pokemon' } & Pick<
  Pokemon,
  'id'
> & {
    pokemonsprites: Array<
      { __typename?: 'pokemonsprites' } & Pick<
        Pokemonsprites,
        'id' | 'sprites'
      >
    >;
    pokemonspecy?: Maybe<ApiSpecy>;
    pokemontypes: Array<
      { __typename?: 'pokemontype' } & Pick<
        Pokemontype,
        'id'
      > & {
          type?: Maybe<
            { __typename?: 'type' } & Pick<
              Type,
              'id' | 'name'
            >
          >;
        }
    >;
  };

export type ApiSpecyFlavorText = {
  __typename?: 'pokemonspeciesflavortext';
} & Pick<
  Pokemonspeciesflavortext,
  'id' | 'flavor_text' | 'language_id'
> & {
    version?: Maybe<
      { __typename?: 'version' } & Pick<
        Version,
        'id' | 'name'
      >
    >;
  };

export type ApiAbility = { __typename?: 'pokemonability' } & Pick<
  Pokemonability,
  'id'
> & {
    ability?: Maybe<
      { __typename?: 'ability' } & {
        abilitynames: ApiAbilityName[];
        abilityflavortexts: ApiAbilityFlavorText[];
      }
    >;
  };

export type ApiAbilityFlavorText = {
  __typename?: 'abilityflavortext';
} & Pick<Abilityflavortext, 'id' | 'flavor_text' | 'language_id'>;

export type ApiAbilityName = { __typename?: 'abilityname' } & Pick<
  Abilityname,
  'id' | 'name' | 'language_id'
>;

export type ApiPokemonListItem = { __typename?: 'pokemon' } & Pick<
  Pokemon,
  'id'
> & {
    pokemonsprites: Array<
      { __typename?: 'pokemonsprites' } & Pick<
        Pokemonsprites,
        'id' | 'sprites'
      >
    >;
    pokemonspecy?: Maybe<
      { __typename?: 'pokemonspecies' } & Pick<
        Pokemonspecies,
        'id'
      > & {
          pokemonspeciesnames: Array<
            { __typename?: 'pokemonspeciesname' } & Pick<
              Pokemonspeciesname,
              'id' | 'language_id' | 'name'
            >
          >;
        }
    >;
    pokemontypes: Array<
      { __typename?: 'pokemontype' } & Pick<
        Pokemontype,
        'id'
      > & {
          type?: Maybe<
            { __typename?: 'type' } & Pick<
              Type,
              'id' | 'name'
            >
          >;
        }
    >;
  };

export type ApiPokemon = { __typename?: 'pokemon' } & Pick<
  Pokemon,
  'id' | 'height' | 'weight'
> & {
    pokemonspecy?: Maybe<
      { __typename?: 'pokemonspecies' } & Pick<
        Pokemonspecies,
        'id' | 'has_gender_differences' | 'gender_rate'
      > & {
          pokemonspeciesnames: Array<
            { __typename?: 'pokemonspeciesname' } & Pick<
              Pokemonspeciesname,
              'id' | 'name' | 'genus' | 'language_id'
            >
          >;
          pokemonspeciesflavortexts: ApiSpecyFlavorText[];
          evolutionchain?: Maybe<ApiEvolutionChain>;
        }
    >;
    pokemontypes: Array<
      { __typename?: 'pokemontype' } & Pick<
        Pokemontype,
        'id'
      > & {
          type?: Maybe<
            { __typename?: 'type' } & Pick<Type, 'id'> & {
                typenames: ApiTypeName[];
                TypeefficaciesByTargetTypeId: Array<
                  { __typename?: 'typeefficacy' } & Pick<
                    Typeefficacy,
                    'id' | 'damage_factor'
                  > & {
                      type?: Maybe<
                        { __typename?: 'type' } & Pick<
                          Type,
                          'id'
                        > & { typenames: ApiTypeName[] }
                      >;
                    }
                >;
              }
          >;
        }
    >;
    pokemonmoves: Array<
      { __typename?: 'pokemonmove' } & Pick<
        Pokemonmove,
        'id' | 'level'
      > & {
          move?: Maybe<
            { __typename?: 'move' } & Pick<
              Move,
              'id' | 'accuracy' | 'pp' | 'priority' | 'power'
            > & {
                movenames: ApiMoveName[];
                movedamageclass?: Maybe<
                  { __typename?: 'movedamageclass' } & Pick<
                    Movedamageclass,
                    'id' | 'name'
                  >
                >;
                movemeta: Array<
                  { __typename?: 'movemeta' } & Pick<
                    Movemeta,
                    | 'id'
                    | 'ailment_chance'
                    | 'crit_rate'
                    | 'drain'
                    | 'flinch_chance'
                    | 'healing'
                    | 'max_hits'
                    | 'max_turns'
                    | 'min_hits'
                    | 'min_turns'
                    | 'stat_chance'
                  > & {
                      movemetaailment?: Maybe<
                        {
                          __typename?: 'movemetaailment';
                        } & Pick<Movemetaailment, 'id' | 'name'>
                      >;
                      movemetacategory?: Maybe<
                        {
                          __typename?: 'movemetacategory';
                        } & Pick<Movemetacategory, 'id' | 'name'>
                      >;
                    }
                >;
              }
          >;
        }
    >;
    pokemonabilities: ApiAbility[];
  };
