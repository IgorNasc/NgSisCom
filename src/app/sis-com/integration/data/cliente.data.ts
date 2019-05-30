import { Injectable } from '@angular/core';

import { ClienteApi } from '../api/cliente.api';

import { RestInput } from '../../business/model/restinput.model';
import { Cliente } from '../../business/model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteData {

  constructor(
    private clientApi: ClienteApi
  ) { }

  getDefautContext(){
    return "cliente/";
  }

  findAll(){
    return this.clientApi.get(this.getDefautContext() + "findAll");
  }

  save(body: RestInput<Cliente>){
    return this.clientApi.post(this.getDefautContext() + "cadastrar", body);
  }

  delete(codigo: Number){
    return this.clientApi.delete(this.getDefautContext() + "delete/" + codigo);
  }
}
