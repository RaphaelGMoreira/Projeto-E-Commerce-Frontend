import { Component, OnInit } from '@angular/core';
import { Esportes } from './esportes.model';
import { EsportesService } from './esportes.service';

@Component({
  selector: 'app-esportes',
  templateUrl: './esportes.component.html',
  styleUrls: ['./esportes.component.css']
})
export class EsportesComponent implements OnInit {

  filteredAcaos: Esportes[] = []

  _esporte: Esportes[] = [];

  _filterby!: string;



  constructor(private esporteService: EsportesService) { }

  ngOnInit(): void {

    this._esporte = this.esporteService.retrieveALL();
    this.filteredAcaos = this._esporte;

  }

  set filter(value: string){
    this._filterby = value;

    this.filteredAcaos = this._esporte.filter((esporte: Esportes) => esporte.nome.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterby;
  }

}