import { Produto } from "./produto.model";

export class Estoque{

    id !: number;
    produtoId !: number;
    produto !: Produto;
    qtdproduto !: number;

}