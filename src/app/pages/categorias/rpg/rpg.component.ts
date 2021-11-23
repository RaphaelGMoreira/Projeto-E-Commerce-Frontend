import { Component, OnInit } from '@angular/core';
import { Rpg } from './rpg.model';
import { RpgService } from './rpg.service';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RpgComponent implements OnInit {

  filteredAcaos: Rpg[] = []

  _rpg: Rpg[] = [];

  _filterby!: string;



  constructor(private rpgService: RpgService) { }

  ngOnInit(): void {

    this._rpg = this.rpgService.retrieveALL();
    this.filteredAcaos = this._rpg;

  }

  set filter(value: string){
    this._filterby = value;

    this.filteredAcaos = this._rpg.filter((rpg: Rpg) => rpg.nome.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterby;
  }

}