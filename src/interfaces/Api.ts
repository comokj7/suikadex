import { Maybe } from 'graphql/jsutils/Maybe';
import {
  Pokemon_V2_Evolutionchain,
  Pokemon_V2_Pokemonspecies,
  Pokemon_V2_Pokemonspeciesname,
  Pokemon_V2_Pokemonevolution,
  Pokemon_V2_Item,
  Pokemon_V2_Itemname,
  Pokemon_V2_Location,
  Pokemon_V2_Locationname,
  Pokemon_V2_Region,
  Pokemon_V2_Regionname,
  Pokemon_V2_Gender,
  Pokemon_V2_Evolutiontrigger,
  Pokemon_V2_Move,
  Pokemon_V2_Movename,
  Pokemon_V2_Type,
  Pokemon_V2_Typename,
  Pokemon_V2_Pokemon,
  Pokemon_V2_Pokemonsprites,
  Pokemon_V2_Pokemontype,
  Pokemon_V2_Abilityflavortext,
  Pokemon_V2_Abilityname,
  Pokemon_V2_Movedamageclass,
  Pokemon_V2_Movemeta,
  Pokemon_V2_Movemetaailment,
  Pokemon_V2_Movemetacategory,
  Pokemon_V2_Pokemonability,
  Pokemon_V2_Pokemonmove,
  Pokemon_V2_Pokemonspeciesflavortext,
  Pokemon_V2_Typeefficacy,
  Pokemon_V2_Version,
} from '../graphql/generated/schemas';

export type ApiSpecy = { __typename?: 'pokemon_v2_pokemonspecies' } & Pick<
  Pokemon_V2_Pokemonspecies,
  'id' | 'evolves_from_species_id'
> & {
    pokemon_v2_pokemonspeciesnames: ApiSpecyName[];
    pokemon_v2_pokemonevolutions: ApiEvolution[];
  };

export type ApiSpecyName = {
  __typename?: 'pokemon_v2_pokemonspeciesname';
} & Pick<
  Pokemon_V2_Pokemonspeciesname,
  'id' | 'name' | 'genus' | 'language_id'
>;

export type ApiEvolutionChain = Maybe<
  { __typename?: 'pokemon_v2_evolutionchain' } & Pick<
    Pokemon_V2_Evolutionchain,
    'id'
  > & {
      pokemon_v2_pokemonspecies: ApiSpecy[];
    }
>;

export type ApiLocationName = {
  __typename?: 'pokemon_v2_locationname';
} & Pick<Pokemon_V2_Locationname, 'id' | 'language_id' | 'name'>;

export type ApiRegionName = {
  __typename?: 'pokemon_v2_regionname';
} & Pick<Pokemon_V2_Regionname, 'id' | 'language_id' | 'name'>;

export type ApiTypeName = {
  __typename?: 'pokemon_v2_typename';
} & Pick<Pokemon_V2_Typename, 'id' | 'language_id' | 'name'>;

export type ApiMoveName = {
  __typename?: 'pokemon_v2_movename';
} & Pick<Pokemon_V2_Movename, 'id' | 'language_id' | 'name'>;

export type ApiItemName = {
  __typename?: 'pokemon_v2_itemname';
} & Pick<Pokemon_V2_Itemname, 'id' | 'language_id' | 'name'>;

export type ApiEvolution = {
  __typename?: 'pokemon_v2_pokemonevolution';
} & Pick<
  Pokemon_V2_Pokemonevolution,
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
    pokemon_v2_item?: Maybe<
      { __typename?: 'pokemon_v2_item' } & Pick<Pokemon_V2_Item, 'id'> & {
          pokemon_v2_itemnames: ApiItemName[];
        }
    >;
    pokemon_v2_location?: Maybe<
      { __typename?: 'pokemon_v2_location' } & Pick<
        Pokemon_V2_Location,
        'id'
      > & {
          pokemon_v2_locationnames: ApiLocationName[];
          pokemon_v2_region?: Maybe<
            {
              __typename?: 'pokemon_v2_region';
            } & Pick<Pokemon_V2_Region, 'id'> & {
                pokemon_v2_regionnames: Array<
                  {
                    __typename?: 'pokemon_v2_regionname';
                  } & Pick<Pokemon_V2_Regionname, 'id' | 'language_id' | 'name'>
                >;
              }
          >;
        }
    >;
    pokemon_v2_gender?: Maybe<
      { __typename?: 'pokemon_v2_gender' } & Pick<
        Pokemon_V2_Gender,
        'id' | 'name'
      >
    >;
    pokemon_v2_evolutiontrigger?: Maybe<
      {
        __typename?: 'pokemon_v2_evolutiontrigger';
      } & Pick<Pokemon_V2_Evolutiontrigger, 'id' | 'name'>
    >;
    pokemonV2PokemonspecyByPartySpeciesId?: Maybe<
      {
        __typename?: 'pokemon_v2_pokemonspecies';
      } & Pick<Pokemon_V2_Pokemonspecies, 'id'> & {
          pokemon_v2_pokemonspeciesnames: Array<
            {
              __typename?: 'pokemon_v2_pokemonspeciesname';
            } & Pick<
              Pokemon_V2_Pokemonspeciesname,
              'id' | 'language_id' | 'name'
            >
          >;
        }
    >;
    pokemonV2PokemonspecyByTradeSpeciesId?: Maybe<
      {
        __typename?: 'pokemon_v2_pokemonspecies';
      } & Pick<Pokemon_V2_Pokemonspecies, 'id'> & {
          pokemon_v2_pokemonspeciesnames: Array<
            {
              __typename?: 'pokemon_v2_pokemonspeciesname';
            } & Pick<
              Pokemon_V2_Pokemonspeciesname,
              'id' | 'language_id' | 'name'
            >
          >;
        }
    >;
    pokemonV2ItemByHeldItemId?: Maybe<
      { __typename?: 'pokemon_v2_item' } & Pick<Pokemon_V2_Item, 'id'> & {
          pokemon_v2_itemnames: Array<
            {
              __typename?: 'pokemon_v2_itemname';
            } & Pick<Pokemon_V2_Itemname, 'id' | 'language_id' | 'name'>
          >;
        }
    >;
    pokemon_v2_move?: Maybe<
      { __typename?: 'pokemon_v2_move' } & Pick<Pokemon_V2_Move, 'id'> & {
          pokemon_v2_movenames: Array<
            {
              __typename?: 'pokemon_v2_movename';
            } & Pick<Pokemon_V2_Movename, 'id' | 'language_id' | 'name'>
          >;
          pokemon_v2_type?: Maybe<
            {
              __typename?: 'pokemon_v2_type';
            } & Pick<Pokemon_V2_Type, 'id'> & {
                pokemon_v2_typenames: Array<
                  {
                    __typename?: 'pokemon_v2_typename';
                  } & Pick<Pokemon_V2_Typename, 'id' | 'language_id' | 'name'>
                >;
              }
          >;
        }
    >;
    pokemonV2TypeByPartyTypeId?: Maybe<
      { __typename?: 'pokemon_v2_type' } & Pick<Pokemon_V2_Type, 'id'> & {
          pokemon_v2_typenames: Array<
            {
              __typename?: 'pokemon_v2_typename';
            } & Pick<Pokemon_V2_Typename, 'id' | 'language_id' | 'name'>
          >;
        }
    >;
    pokemon_v2_type?: Maybe<
      { __typename?: 'pokemon_v2_type' } & Pick<Pokemon_V2_Type, 'id'> & {
          pokemon_v2_typenames: Array<
            {
              __typename?: 'pokemon_v2_typename';
            } & Pick<Pokemon_V2_Typename, 'id' | 'language_id' | 'name'>
          >;
        }
    >;
  };

export type ApiPokemonSimple = { __typename?: 'pokemon_v2_pokemon' } & Pick<
  Pokemon_V2_Pokemon,
  'id'
> & {
    pokemon_v2_pokemonsprites: Array<
      { __typename?: 'pokemon_v2_pokemonsprites' } & Pick<
        Pokemon_V2_Pokemonsprites,
        'id' | 'sprites'
      >
    >;
    pokemon_v2_pokemonspecy?: Maybe<ApiSpecy>;
    pokemon_v2_pokemontypes: Array<
      { __typename?: 'pokemon_v2_pokemontype' } & Pick<
        Pokemon_V2_Pokemontype,
        'id'
      > & {
          pokemon_v2_type?: Maybe<
            { __typename?: 'pokemon_v2_type' } & Pick<
              Pokemon_V2_Type,
              'id' | 'name'
            >
          >;
        }
    >;
  };

export type ApiSpecyFlavorText = {
  __typename?: 'pokemon_v2_pokemonspeciesflavortext';
} & Pick<
  Pokemon_V2_Pokemonspeciesflavortext,
  'id' | 'flavor_text' | 'language_id'
> & {
    pokemon_v2_version?: Maybe<
      { __typename?: 'pokemon_v2_version' } & Pick<
        Pokemon_V2_Version,
        'id' | 'name'
      >
    >;
  };

export type ApiAbility = { __typename?: 'pokemon_v2_pokemonability' } & Pick<
  Pokemon_V2_Pokemonability,
  'id'
> & {
    pokemon_v2_ability?: Maybe<
      { __typename?: 'pokemon_v2_ability' } & {
        pokemon_v2_abilitynames: ApiAbilityName[];
        pokemon_v2_abilityflavortexts: ApiAbilityFlavorText[];
      }
    >;
  };

export type ApiAbilityFlavorText = {
  __typename?: 'pokemon_v2_abilityflavortext';
} & Pick<Pokemon_V2_Abilityflavortext, 'id' | 'flavor_text' | 'language_id'>;

export type ApiAbilityName = { __typename?: 'pokemon_v2_abilityname' } & Pick<
  Pokemon_V2_Abilityname,
  'id' | 'name' | 'language_id'
>;

export type ApiPokemonListItem = { __typename?: 'pokemon_v2_pokemon' } & Pick<
  Pokemon_V2_Pokemon,
  'id'
> & {
    pokemon_v2_pokemonsprites: Array<
      { __typename?: 'pokemon_v2_pokemonsprites' } & Pick<
        Pokemon_V2_Pokemonsprites,
        'id' | 'sprites'
      >
    >;
    pokemon_v2_pokemonspecy?: Maybe<
      { __typename?: 'pokemon_v2_pokemonspecies' } & Pick<
        Pokemon_V2_Pokemonspecies,
        'id'
      > & {
          pokemon_v2_pokemonspeciesnames: Array<
            { __typename?: 'pokemon_v2_pokemonspeciesname' } & Pick<
              Pokemon_V2_Pokemonspeciesname,
              'id' | 'language_id' | 'name'
            >
          >;
        }
    >;
    pokemon_v2_pokemontypes: Array<
      { __typename?: 'pokemon_v2_pokemontype' } & Pick<
        Pokemon_V2_Pokemontype,
        'id'
      > & {
          pokemon_v2_type?: Maybe<
            { __typename?: 'pokemon_v2_type' } & Pick<
              Pokemon_V2_Type,
              'id' | 'name'
            >
          >;
        }
    >;
  };

export type ApiPokemon = { __typename?: 'pokemon_v2_pokemon' } & Pick<
  Pokemon_V2_Pokemon,
  'id' | 'height' | 'weight'
> & {
    pokemon_v2_pokemonspecy?: Maybe<
      { __typename?: 'pokemon_v2_pokemonspecies' } & Pick<
        Pokemon_V2_Pokemonspecies,
        'id' | 'has_gender_differences' | 'gender_rate'
      > & {
          pokemon_v2_pokemonspeciesnames: Array<
            { __typename?: 'pokemon_v2_pokemonspeciesname' } & Pick<
              Pokemon_V2_Pokemonspeciesname,
              'id' | 'name' | 'genus' | 'language_id'
            >
          >;
          pokemon_v2_pokemonspeciesflavortexts: ApiSpecyFlavorText[];
          pokemon_v2_evolutionchain?: Maybe<ApiEvolutionChain>;
        }
    >;
    pokemon_v2_pokemontypes: Array<
      { __typename?: 'pokemon_v2_pokemontype' } & Pick<
        Pokemon_V2_Pokemontype,
        'id'
      > & {
          pokemon_v2_type?: Maybe<
            { __typename?: 'pokemon_v2_type' } & Pick<Pokemon_V2_Type, 'id'> & {
                pokemon_v2_typenames: ApiTypeName[];
                pokemonV2TypeefficaciesByTargetTypeId: Array<
                  { __typename?: 'pokemon_v2_typeefficacy' } & Pick<
                    Pokemon_V2_Typeefficacy,
                    'id' | 'damage_factor'
                  > & {
                      pokemon_v2_type?: Maybe<
                        { __typename?: 'pokemon_v2_type' } & Pick<
                          Pokemon_V2_Type,
                          'id'
                        > & { pokemon_v2_typenames: ApiTypeName[] }
                      >;
                    }
                >;
              }
          >;
        }
    >;
    pokemon_v2_pokemonmoves: Array<
      { __typename?: 'pokemon_v2_pokemonmove' } & Pick<
        Pokemon_V2_Pokemonmove,
        'id' | 'level'
      > & {
          pokemon_v2_move?: Maybe<
            { __typename?: 'pokemon_v2_move' } & Pick<
              Pokemon_V2_Move,
              'id' | 'accuracy' | 'pp' | 'priority' | 'power'
            > & {
                pokemon_v2_movenames: ApiMoveName[];
                pokemon_v2_movedamageclass?: Maybe<
                  { __typename?: 'pokemon_v2_movedamageclass' } & Pick<
                    Pokemon_V2_Movedamageclass,
                    'id' | 'name'
                  >
                >;
                pokemon_v2_movemeta: Array<
                  { __typename?: 'pokemon_v2_movemeta' } & Pick<
                    Pokemon_V2_Movemeta,
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
                      pokemon_v2_movemetaailment?: Maybe<
                        {
                          __typename?: 'pokemon_v2_movemetaailment';
                        } & Pick<Pokemon_V2_Movemetaailment, 'id' | 'name'>
                      >;
                      pokemon_v2_movemetacategory?: Maybe<
                        {
                          __typename?: 'pokemon_v2_movemetacategory';
                        } & Pick<Pokemon_V2_Movemetacategory, 'id' | 'name'>
                      >;
                    }
                >;
              }
          >;
        }
    >;
    pokemon_v2_pokemonabilities: ApiAbility[];
  };
