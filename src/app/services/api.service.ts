import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFormulario, IServicios, ITurnos } from '../interfaces/Iturnos.Interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGenerarTurnos(data: IFormulario) {
    return this.http.post<ITurnos[]>('http://localhost:3000/api/v1/turnos', data)
  }

  getServicios() {
    return this.http.get<IServicios[]>('http://localhost:3000/api/v1/turnos/servicios')
  }
}
