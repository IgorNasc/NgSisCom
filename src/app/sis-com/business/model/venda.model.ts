import { Cliente } from './cliente.model';
import { Vendedor } from './vendedor.model';
import { ItemVenda } from './item.venda.model';

export class Venda{
  codigo: number;
	formaPagto: Number;
	dataVenda: Date;
	cliente: Cliente;
	vendedor: Vendedor;
	listaVenda: Array<ItemVenda>;
}
