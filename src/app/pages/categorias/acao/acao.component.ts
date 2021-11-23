import { Component, OnInit } from '@angular/core';
import { Acao } from './acao.model';
import { AcaoService } from './acao.service';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  filteredAcaos: Acao[] = []

  _acaos: Acao[] = [];

  _filterby!: string;



  constructor(private acaoService: AcaoService) { }

  ngOnInit(): void {

    this._acaos = this.acaoService.retrieveALL();
    this.filteredAcaos = this._acaos;

  }

  set filter(value: string){
    this._filterby = value;

    this.filteredAcaos = this._acaos.filter((acao: Acao) => acao.nome.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterby;
  }

}
