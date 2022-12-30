import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemonList : Pokemon[];
  pokemon: Pokemon|undefined

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pokemonService: PokemonService) { } // ActivatedRoute c'est pour rendre le service route disponible dans le composant

  ngOnInit() {
    //this.pokemonList = this.pokemonService.getPokemonList();
    const pokemonId: String|null = this.route.snapshot.paramMap.get('id'); // snapshot cest pour utiliser la route a linstant t demander par lutilisateur

    if (pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

  goToPokemonForm(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }

}
