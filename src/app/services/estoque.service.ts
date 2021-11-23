import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estoque } from '../models/estoque.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  post(estoque: Estoque){

    return this.http.post<Estoque>("http://localhost:5000/api/Estoque", estoque);

  }

  put(estoque: Estoque){

    return this.http.put<Estoque>("http://localhost:5000/api/Estoque", estoque);

  }

  get(){

    return this.http.get<Estoque[]>("http://localhost:5000/api/Estoque");

  }

  getPeloId(id: number){

    return this.http.get<Estoque>("http://localhost:5000/api/Estoque" + id);

  }

  delete(id: number){

    return this.http.delete<Estoque>("http://localhost:5000/api/Estoque" + id);

  }

  
}