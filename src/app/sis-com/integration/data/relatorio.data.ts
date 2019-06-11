import { Injectable } from '@angular/core';

import { ProdutoApi } from '../api/Produto.api';
import { RelatorioApi } from '../api/relatorio.api';

@Injectable({
  providedIn: 'root'
})
export class RelatorioData{

  constructor(
    private relatorioApi: RelatorioApi
  ) { }

  getDefautContext(){
    return "relatorio/";
  }

  findAllVendaVendedor(){
    return this.relatorioApi.get(this.getDefautContext() + "venda/vendedor");
  }

  findAllVendaCliente(){
    return this.relatorioApi.get(this.getDefautContext() + "venda/cliente");
  }

  findAllCompraFornecedor(){
    return this.relatorioApi.get(this.getDefautContext() + "compra/fornecedor");
  }

}
