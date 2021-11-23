import { Component, OnInit } from '@angular/core';
import { Corrida } from './corrida.model';
import { CorridaService } from './corrida.service';

@Component({
  selector: 'app-corrida',
  templateUrl: './corrida.component.html',
  styleUrls: ['./corrida.component.css']
})
export class CorridaComponent implements OnInit {

  filteredAcaos: Corrida[] = []

  _corrida: Corrida[] = [];

  _filterby!: string;



  constructor(private corridaService: CorridaService) { }

  ngOnInit(): void {

    this._corrida = this.corridaService.retrieveALL();
    this.filteredAcaos = this._corrida;

  }

  set filter(value: string){
    this._filterby = value;

    this.filteredAcaos = this._corrida.filter((corrida: Corrida) => corrida.nome.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterby;
  }

}