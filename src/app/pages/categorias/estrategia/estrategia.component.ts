import { Component, OnInit } from '@angular/core';
import { Estrategia } from './estrategia.model';
import { EstrategiaService } from './estrategia.service';

@Component({
  selector: 'app-estrategia',
  templateUrl: './estrategia.component.html',
  styleUrls: ['./estrategia.component.css']
})
export class EstrategiaComponent implements OnInit {

  filteredAcaos: Estrategia[] = []

  _estrategia: Estrategia[] = [];

  _filterby!: string;



  constructor(private estrategiaService: EstrategiaService) { }

  ngOnInit(): void {

    this._estrategia = this.estrategiaService.retrieveALL();
    this.filteredAcaos = this._estrategia;

  }

  set filter(value: string){
    this._filterby = value;

    this.filteredAcaos = this._estrategia.filter((estrategia: Estrategia) => estrategia.nome.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterby;
  }

}