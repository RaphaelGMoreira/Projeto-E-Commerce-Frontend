import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  carrinho: Item[] = [];
  constructor(private http: HttpClient) { }

  post(pedido: Pedido){

    return this.http.post<Pedido>("http://localhost:5000/api/pedido", pedido);

  }

  put(pedido: Pedido){

    return this.http.put<Pedido>("http://localhost:5000/api/pedido", pedido);

  }

  get(){

    return this.http.get<Pedido[]>("http://localhost:5000/api/pedido");

  }

  getPeloId(id: number){

    return this.http.get<Pedido>("http://localhost:5000/api/pedido" + id);

  }

  delete(id: number){

    return this.http.delete<Pedido>("http://localhost:5000/api/pedido" + id);

  }

  
}