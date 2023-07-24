import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: any = [];

  constructor(private httpClient: HttpClient) {
    this.loadPokemons();
  }

async loadPokemons() {
  const request = await this.httpClient
  .get<any>('https://pokeapi.co/api/v2/pokemon?limit=1281')
  .toPromise()

  this.pokemons = request.results;
  }
}