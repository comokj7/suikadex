export type EvolutionChain = {
  id?: number;
  name?: string;
  conditions?: EvolutionCondition[];
  next?: EvolutionChain;
}[];

export type EvolutionCondition = {
  trigger?: string | null;
  gender?: string | null;
  minLevel?: number | null;
  useItem?: string | null;
  heldItem?: string | null;
  timeOfDay?: string | null;
  minHappiness?: number | null;
  minBeauty?: number | null;
  minAffection?: number | null;
  partyPokemon?: string | null;
  partyType?: string | null;
  tradePokemon?: string | null;
  move?: string | null;
  moveType?: string | null;
  where?: {
    region?: string | null;
    location?: string | null;
  };
};
