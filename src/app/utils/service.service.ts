import { Injectable } from '@angular/core';
import { API } from './envirenmont/api'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListResponse, PokemonAbilitiesResponse, ListAbility, Ability, AbilitySprites } from './TTypes/TTypes';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  token: string = API.token;
  apiList: string = API.apiList;
  apiHost: string = API['X-RapidAPI-Host'];
  next: number = 0;
  ability:Ability[] = [];
  pokemon: AbilitySprites[] = [];

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonListResponse> {
    let header = new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    });
    const requestOptions = { headers: header };
    return this.http.get<PokemonListResponse>(`${this.apiList}`+`?offset=${this.next}&limit=20`, requestOptions)
  }
  
  getPokemonAbilities(url: string): Observable<PokemonAbilitiesResponse> {
    let header = new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    });

    const requestOptions = { headers: header };
    return this.http.get<PokemonAbilitiesResponse>(url, requestOptions);
  }

  getAbility(url: string): Observable<ListAbility> {
    let header = new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    });

    const requestOptions = { headers: header };
    return this.http.get<ListAbility>(url, requestOptions);
  }

  addNext(){
    this.next += 20;
  }

  previousNext(){
    if(this.next >= 20){
      this.next -= 20;
    }
  }

}
