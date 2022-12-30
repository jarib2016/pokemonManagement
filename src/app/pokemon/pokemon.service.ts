import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./pokemonList";

@Injectable() // j'ai enlever le pokemon providers in : 'root' qui est d'habitude la pour l'injecté dans le pokemon module
export class PokemonService {

  //pokemon1:Pokemon;

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
    /*return POKEMONS.find(function(pokemon) {
      return pokemon.id == pokemonId;
    });*/
  }

  getPokemonTypesList(): string[]{
    let pokemonTypes: string[] = [];
    POKEMONS.forEach(pokemonn => {
      pokemonn.types.forEach(type => {
        if(pokemonTypes.indexOf(type) === -1){
          pokemonTypes.push(type)
        }
      })
    })
    return pokemonTypes;
    //return ['feu'];
  }
}
