import { Produto } from './produto.model';
import { Compra } from './compra.model';

export class ItemCompra{
  codigo: Number;
	quantCompra: Number;
	valorCompra: Number;
	produto: Produto;
	compra: Compra;
}
