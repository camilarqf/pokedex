import { PokemonResults } from './pokemonResults';
export interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: PokemonResults[];
}
