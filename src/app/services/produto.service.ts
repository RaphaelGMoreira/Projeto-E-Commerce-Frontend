import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Produto } from '../models/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  

  constructor(private http: HttpClient) { }

  post(produto: Produto){

    return this.http.post<Produto>("http://localhost:5000/api/Produto", produto);

  }

  put(produto: Produto){

    return this.http.put<Produto>("http://localhost:5000/api/Produto", produto);

  }

  get(){

    return this.http.get<Produto[]>("http://localhost:5000/api/Produto");

  }

  getPeloId(id: number){

    return this.http.get<Produto>("http://localhost:5000/api/Produto/" + id);

  }

  getPeloNome(nome: string){

    return this.http.get<Produto>("http://localhost:5000/api/Produto/" + nome);

  }

  delete(id: number){

    return this.http.delete<Produto>("http://localhost:5000/api/Produto/" + id);

  }

  retrieveALL(): Produto[]{
    return PRODUTOS;
  }


}

var PRODUTOS: Produto[] = [

  {
    id: 1,
    nome: 'GTA V',
    preco: 30.99,
    plataforma: 'pc',
    categoria: 'Ação',
    imageUrl: '/assets/images/gtav.jpg',
  }
];
