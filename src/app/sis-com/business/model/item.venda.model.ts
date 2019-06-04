import { Produto } from './produto.model';
import { Venda } from './venda.model';

export class ItemVenda{
  codigo: Number;
	quantVenda: Number;
	valorVenda: Number;
	produto: Produto;
	venda: Venda;
}
