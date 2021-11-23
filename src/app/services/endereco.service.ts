import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../models/endereco.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  post(endereco: Endereco){
    return this.http.post<Endereco>(`${environment.baseApiUrl}/endereco`, endereco);
  }

  put(endereco: Endereco){
    return this.http.put<Endereco>(`${environment.baseApiUrl}/endereco`, endereco);
  }

  delete(id: number){

    return this.http.delete(`${environment.baseApiUrl}/endereco${id}`);

  }

  getPeloId(id: number){
    return this.http.get<Endereco>(`${environment.baseApiUrl}/endereco/${id}`);
  }

  get(){
    return this.http.get<Endereco[]>(`${environment.baseApiUrl}/endereco`);
  }

}
