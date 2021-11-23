import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-carrinho-lista',
  templateUrl: './carrinho-lista.component.html',
  styleUrls: ['./carrinho-lista.component.css']
})
export class CarrinhoListaComponent implements OnInit {
  item: Item[] = [];

  constructor(private pedisoService: PedidoService) { }

  ngOnInit(): void {
    this.item = this.pedisoService.carrinho;
  }

}
