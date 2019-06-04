import { Injectable } from '@angular/core';

import { VendaApi } from '../api/venda.api';

import { RestInput } from '../../business/model/restinput.model';
import { Venda } from '../../business/model/venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaData {

  constructor(
    private vendaApi: VendaApi
  ) { }

  getDefautContext(){
    return "venda/";
  }

  findAll(){
    return this.vendaApi.get(this.getDefautContext() + "findAll");
  }

  save(body: RestInput<Venda>){
    return this.vendaApi.post(this.getDefautContext() + "cadastrar", body);
  }

  delete(codigo: Number){
    return this.vendaApi.delete(this.getDefautContext() + "delete/" + codigo);
  }
}
