import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./pokemon.service";
import {FormsModule} from "@angular/forms";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonRoutes : Routes = [
  {path: 'edit/pokemon/:id', component: EditPokemonComponent},
  {path: 'pokemons', component: ListPokemonComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},
];

@NgModule({
  // déclaration des composants, directives, pipes etc... uniquement pour la gestion des pokemons.
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //importation du module de formulaire
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService] // j'ai importé le service pokemon dans le module des pokemons pour qu'il ne soit utilisé uniquement dans cet classe
})
export class PokemonModule { }
