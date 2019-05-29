import { Injectable } from '@angular/core';

import { FornecedorApi } from '../api/fornecedor.api';

import { Fornecedor } from '../../business/model/fornecedor.model';
import { RestInput } from '../../business/model/restinput.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorData {

  constructor(
    private fornecedorApi: FornecedorApi
  ) { }

  getDefautContext(){
    return "fornecedor/";
  }

  findAll(){
    return this.fornecedorApi.get(this.getDefautContext() + "findAll");
  }

  save(body: RestInput<Fornecedor>){
    return this.fornecedorApi.post(this.getDefautContext() + "cadastrar", body);
  }
}
