import { Fornecedor } from './fornecedor.model';
import { ItemCompra } from './item.compra.model';

export class Compra{
  codigo: Number;
	dataCompra: Date;
	fornecedor: Fornecedor;
	listaCompra: Array<ItemCompra>;
}
