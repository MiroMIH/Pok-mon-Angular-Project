import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pk-list',
  templateUrl: './pk-list.component.html',
  styles: [
  ]
})
export class PkListComponent implements OnInit {

  constructor(private router:Router , private pokemonService:PokemonService) { }
  title = 'POKEMON GALLERY';
  pokemonsList:Pokemon[];
  pokemonSelected:Pokemon|undefined;

  ngOnInit(){
    console.table(this.pokemonsList);
    this.pokemonsList=this.pokemonService.getPokemonList();    
  }


  //DEFINE A METHOD TO BE USED IN INIT
  selectPokemon(pokemonId:string)
  {
    const id = +pokemonId;
    const pokemon: Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId)
    if(pokemon)
      {
        console.log(`YOU CHOSE ${pokemon.name}`);
        this.pokemonSelected=pokemon;
      }
      else
      {
        console.log(`YOU CHOSE :WRONG CHOICE`);
        this.pokemonSelected=pokemon;
      }
  }


  goToPokemonDetail(pokemon:Pokemon)
  {
    this.router.navigate(['/pokemons',pokemon.id]);
  }

}
