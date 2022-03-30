import { PokemonResults } from './models/pokemonResults';
import { Pokemon } from './models/pokemon';
import { Component, OnInit } from '@angular/core';
import { InicioService } from './service/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  pokemon!: Pokemon;

  constructor(private inicioService: InicioService) { }

  ngOnInit(): void {
    this.findAllPokemon();
  }

  findAllPokemon(){
    this.inicioService.findAllPokemon()
    .subscribe(response =>{
      this.pokemon = response;
      console.log(this.pokemon)
    })
  }
}
