import { Injectable } from '@angular/core';

import { RelatorioData } from '../../integration/data/relatorio.data';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(
    private relatorioData: RelatorioData
  ) { }

  findAllVendaVendedor(){
    return this.relatorioData.findAllVendaVendedor();
  }

  findAllVendaCliente(){
    return this.relatorioData.findAllVendaCliente();
  }

  findAllCompraFornecedor(){
    return this.relatorioData.findAllCompraFornecedor();
  }
}
