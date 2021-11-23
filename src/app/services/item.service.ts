import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  post(item: Item){

    return this.http.post<Item>("http://localhost:5000/api/item", item);

  }

  put(item: Item){

    return this.http.put<Item>("http://localhost:5000/api/item", item);

  }

  get(){

    return this.http.get<Item[]>("http://localhost:5000/api/item");

  }

  getPeloId(id: number){

    return this.http.get<Item>("http://localhost:5000/api/item" + id);

  }

  delete(id: number){

    return this.http.delete<Item>("http://localhost:5000/api/item" + id);

  }

  
}