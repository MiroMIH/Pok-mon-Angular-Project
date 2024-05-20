import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PkListComponent } from './pk-list/pk-list.component';
import { PkDetailsComponent } from './pk-details/pk-details.component';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule , Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

const PkRoutes:Routes=[
  {path:'pokemons',component:PkListComponent},
  {path:'pokemons/:id',component:PkDetailsComponent},
  {path:'pokemons/edit/:id',component:PokemonEditComponent},
  {path:'mainpage',component:MainpageComponent},
]


@NgModule({
  declarations: [
    MainpageComponent,
    PkListComponent,
    PkDetailsComponent,
    BorderCardDirective,
    PokemonFormComponent,
    PokemonEditComponent,    
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(PkRoutes)
  ],
  providers:[PokemonService]
})
export class PokemonModule { }
