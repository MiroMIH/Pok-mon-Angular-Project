import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`
})


export class AppComponent implements OnInit{
  title = 'POKEMON GALLERY';
  pokemonsList:Pokemon[]=POKEMONS;
  pokemonSelected:Pokemon|undefined;
  
  ngOnInit(){
    console.table(this.pokemonsList);    
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



}



  //CREATE TYPES RELAED TO DATA BEING MANIPULATED AROUDN IE POKEMON INFO
  //ADD MOCKUP DATA IF DISPO

  //LES TEMPLATES :HTML URL PORT 
  //HTNL IN SEPERATE FILES CALLED TEMPLATES!!!!
  //PSEUDO EVENTS IN ANGULAR
  //ANGULAR EVENTS HANDLING SYNTAX
  //DIRECTIVES  INPUT OUTPUT HOSTLISTENER MOUSE  ETNER MOUSE LEAVE
  //USE DIRECTIVES TO PUT REPRETIVE LOGIC ON SAME HTML
  //LES PIPE / THE PIPES : TO HAVE CORRECT FORMAT
  //PIPE CAN BE USED FOR FORMAT + STYLING  


