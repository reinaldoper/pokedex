import { Component, OnInit } from '@angular/core';
import { ServiceService } from './utils/service.service';
import { Pokemon, AbilitySprites } from './utils/TTypes/TTypes';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  pokemonAbility: AbilitySprites[] = [];
  list: string[]= [];
  pokeUrl: string = 'https://a-static.mlcdn.com.br/450x450/pokemon-rotom-pokedex-e-pokebola-super-bola-tomy-sunny-1971-tomy-toys/oliststore/mglfogqnlbi6xn7u/885e77aba789b55aae4eee95431093ae.jpeg'

  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.getListPokemon();
  }
  
  addNext(){
    this.service.addNext();
    this.getListPokemon();
  }

  previousNext(){
    this.service.previousNext();
    this.getListPokemon();
  }

  getListPokemon(): void {
    this.list = []; 
    this.service.getPokemonList().subscribe(api => {
      this.pokemonList = api.results;
      api.results.forEach(list => this.getListAbility(list.url));
    });
  }
 

  getListAbility(url: string):void {
    this.list.push(url);
    const observables: Observable<any>[] = [];
    this.list.forEach(urlList => {
      observables.push(this.service.getPokemonAbilities(urlList));
    });
    forkJoin(observables).subscribe(responses => {
      this.pokemonAbility = responses.map(response => {
        const abilitySprites = response.sprites;
        abilitySprites.name = response.name;
        return abilitySprites;
      });
    });
  }  

 

}
