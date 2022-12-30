import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input()pokemon: Pokemon;// ton entré doit être de type pokemon
  types: string[];
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypesList();
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);// vérification si un pokemon a un type ou pas
  }

  //méthode qui verifie si le type que lutilisateur a cocher est déja défini. si oui on l'enleve si non on l'ajoute et change
  selectType($event: Event, type: string){
    const isCheked: boolean = ($event.target as HTMLInputElement).checked; //savoir si l'utilisateur a checker la page ou non
    if(isCheked){
      this.pokemon.types.push(type);
    }else{
      const index = this.pokemon.types.indexOf(type); // récuperer l'index du pokemon dans le tableau
      this.pokemon.types.splice(index,1);
    }
  }

  onSubmit(){
    console.log('submit form');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

  isTypesValid(type: string): boolean {
    if(this.pokemon.types.length === 1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length === 3 && !this.hasType(type)){
      return false;
    }



    return true;
  }
}
