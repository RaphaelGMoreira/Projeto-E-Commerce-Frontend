
import { Pedido } from "./pedido.model";
import { Produto } from "./produto.model";

export class Item{

    id !: number;
    pedidoId !: number;
    pedido !: Pedido;
    quantidade !: number;
    produtoId !: number;
    produto !: Produto;
    valor !: number;
    
    

}