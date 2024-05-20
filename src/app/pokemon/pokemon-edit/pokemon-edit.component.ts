import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-edit',
  template: `
    <h1>
      EDIT {{pokemon?.name}}
    </h1>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" >
    </p>
    <ng-container *ngIf="pokemon">
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    </ng-container>
  `,
  styles: [
  ]
})
export class PokemonEditComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(private pokemonservice:PokemonService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const pokemonId=this.route.snapshot.paramMap.get('id');
    console.log("🚀 ~ PokemonEditComponent ~ ngOnInit ~ pokemonId:", pokemonId)
    if(pokemonId)
      {
        this.pokemon=this.pokemonservice.getPokemonId(+pokemonId);  
        console.log("🚀 ~ PokemonEditComponent ~ ngOnInit ~ pokemon:", this.pokemon)
      }

  }

}
