import { Component, OnInit } from '@angular/core';
import { Aventura } from './aventura.model';
import { AventuraService } from './aventura.service';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: ['./aventura.component.css']
})
export class AventuraComponent implements OnInit {

  filteredAcaos: Aventura[] = []

  _aventura: Aventura[] = [];

  _filterby!: string;



  constructor(private aventuraService: AventuraService) { }

  ngOnInit(): void {

    this._aventura = this.aventuraService.retrieveALL();
    this.filteredAcaos = this._aventura;

  }

  set filter(value: string){
    this._filterby = value;

    this.filteredAcaos = this._aventura.filter((aventura: Aventura) => aventura.nome.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterby;
  }

}