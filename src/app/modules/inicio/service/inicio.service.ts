import { Pokemon } from './../models/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class InicioService {
  constructor(private http: HttpClient) {}

  findAllPokemon(): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${API_CONFIG.baseUrl}/pokemon`);
  }
}
