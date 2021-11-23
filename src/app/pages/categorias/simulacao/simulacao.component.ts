import { Component, OnInit } from '@angular/core';
import { Simulacao } from './simulacao.model';
import { SimulacaoService } from './simulacao.service';

@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.css']
})
export class SimulacaoComponent implements OnInit {

  filteredAcaos: Simulacao[] = []

  _simulacao: Simulacao[] = [];

  _filterby!: string;



  constructor(private simulacaoService: SimulacaoService) { }

  ngOnInit(): void {

    this._simulacao = this.simulacaoService.retrieveALL();
    this.filteredAcaos = this._simulacao;

  }

  set filter(value: string){
    this._filterby = value;

    this.filteredAcaos = this._simulacao.filter((simulacao: Simulacao) => simulacao.nome.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterby;
  }

}