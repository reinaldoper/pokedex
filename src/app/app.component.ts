import { Component, OnInit } from '@angular/core';
import { ServiceService } from './utils/service.service';
import { Pokemon, AbilitySprites, Ability } from './utils/TTypes/TTypes';
import { Observable, forkJoin } from 'rxjs';
import { Router } from '@angular/router';

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
  nameUrl: string = 'https://pokeapi.co/api/v2/pokemon/pidgeotto'

  constructor(private service: ServiceService, private route: Router) { }
  ngOnInit(): void {
    this.getListPokemon();
    this.getNameList();
  }

  getNameList(){
    this.service.getAbility(this.nameUrl).subscribe(ability => {
      this.service.ability = ability.abilities;
      this.service.pokemon = ability.sprites;
    });
  }
  
  addNext(){
    this.service.addNext();
    this.getListPokemon();
  }

  previousNext(){
    this.service.previousNext();
    this.getListPokemon();
  }

  getText(name: string){
    this.route.navigate(['result'])
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
