import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pk-details',
  templateUrl: './pk-details.component.html',
  styles: [
  ]
})
export class PkDetailsComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon:Pokemon|undefined;

  constructor(private route:ActivatedRoute ,private router:Router ,private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonList=this.pokemonService.getPokemonList();
    const pokemonId:string|null=this.route.snapshot.paramMap.get("id");
    if(pokemonId)
    {
      this.pokemon=this.pokemonService.getPokemonId(+pokemonId);
    }
  }

  goToPokemonList()
  {
    this.router.navigate(['/pokemons']);
  }

  goToPokemonEdit(pokemon:Pokemon)
  {
    this.router.navigate(['/pokemons/edit',pokemon.id]);
  }
}
