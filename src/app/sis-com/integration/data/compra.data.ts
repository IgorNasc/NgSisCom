import { Injectable } from '@angular/core';

import { CompraApi } from '../api/compras.api';

import { RestInput } from '../../business/model/restinput.model';
import { Compra } from '../../business/model/compra.model';

@Injectable({
  providedIn: 'root'
})
export class CompraData {

  constructor(
    private clientApi: CompraApi
  ) { }

  getDefautContext(){
    return "compra/";
  }

  findAll(){
    return this.clientApi.get(this.getDefautContext() + "findAll");
  }

  save(body: RestInput<Compra>){
    return this.clientApi.post(this.getDefautContext() + "fornecedor", body);
  }

  delete(codigo: Number){
    return this.clientApi.delete(this.getDefautContext() + "fornecedor/excluir/" + codigo);
  }
}
