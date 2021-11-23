import { Cadastro } from "./cadastro.model";
import { Item } from "./item.model";

export class Pedido{

    id !: number;
    momentoDaCompra !: Date;
    cadastro !: Cadastro;
    item !: Item;

}