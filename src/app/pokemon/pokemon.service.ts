
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';


export class PokemonService {

  constructor() { }

  getPokemonList():Pokemon[] 
  {
    return POKEMONS;
  }

  getPokemonId(pokemonId:number):Pokemon | undefined
  {
    return POKEMONS.find(pokemon=>pokemon.id==pokemonId)
  }


  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte',
      'Normal',
      'Electrik', 
      'Poison', 
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}