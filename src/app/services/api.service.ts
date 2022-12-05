import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITurnos } from '../interfaces/Iturnos.Interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGenerarTurnos() {
    return this.http.get<ITurnos[]>('http://localhost:3000/api/v1/turnos')
  }
}
