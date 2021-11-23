import { Injectable } from '@angular/core';
import { Cadastro } from '../models/cadastro.model';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  //metodo post para inserir os dados do cadastro no bd
  post(cadastro: Cadastro){
    //return pois o backend retornara um objeto
    //this.http.post para chamar i metodo post do backend
    //<Cadastro> especificando o tipo do objeto que sertá retornado pelo backend
    //"http://localhost:5000/api/cadastro" endereço/endpoint do backend para o cadastro
    //, cadastro estamos passando o objeto que queremos inserir no BD
    return this.http.post<Cadastro>(`${environment.baseApiUrl}/cadastro`, cadastro);

  }

  //metodo put para alterar os dados do cadastro no bd
  put(cadastro: Cadastro){

    return this.http.put<Cadastro>(`${environment.baseApiUrl}/cadastro`, cadastro);

  }

  //metodo get para consultar TODOS os cadastros
  get(cadastro: Cadastro){

    return this.http.get<Cadastro[]>(`${environment.baseApiUrl}/cadastro`);
    
  }

  //metodo get para consultar UM cadastro pelo ID
  getPeloId(id: number){

    return this.http.get<Cadastro>(`${environment.baseApiUrl}/cadastro${id}`);

  }

  //metodo para remover um cadastro pelo ID
  delete(id: number){

    return this.http.delete(`${environment.baseApiUrl}/cadastro${id}`);

  }

}
