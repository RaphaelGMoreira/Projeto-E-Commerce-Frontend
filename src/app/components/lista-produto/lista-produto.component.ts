import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produtoServices: Produto[] = [];

  constructor(private produtoServicoService: ProdutoService) { }

  ngOnInit(): void {
    /*this.produtoServices.get().subscribe((servicos: Produto[])=>{
      this.produtoServices = servicos;*/
    
  }

  
  

}
