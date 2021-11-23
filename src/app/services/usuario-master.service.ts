import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioMaster } from '../models/usuarioMaster.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMasterService {

  constructor(private http: HttpClient) { }

  post(usuarioMaster: UsuarioMaster){
    return this.http.post<UsuarioMaster>(`${environment.baseApiUrl}/usuarioMaster`, usuarioMaster);
  }

  put(usuarioMaster: UsuarioMaster){
    return this.http.put<UsuarioMaster>(`${environment.baseApiUrl}/usuarioMaster`, usuarioMaster);
  }

  delete(id: number){

    return this.http.delete(`${environment.baseApiUrl}/usuarioMaster${id}`);

  }

  getPeloId(id: number){
    return this.http.get<UsuarioMaster>(`${environment.baseApiUrl}/usuarioMaster/${id}`);
  }

  get(){
    return this.http.get<UsuarioMaster[]>(`${environment.baseApiUrl}/usuarioMaster`);
  }
  


}