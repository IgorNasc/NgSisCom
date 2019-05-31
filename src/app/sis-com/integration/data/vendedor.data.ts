import { Injectable } from "@angular/core";

import { VendedorApi } from '../api/vendedor.api';

import { RestInput } from '../../business/model/restinput.model';
import { Vendedor } from '../../business/model/vendedor.model';

@Injectable({
  providedIn: 'root'
})
export class VendedorData {

  constructor(
    private vendedorApi: VendedorApi
  ) { }

  getDefautContext(){
    return "vendedor/";
  }

  findAll(){
    return this.vendedorApi.get(this.getDefautContext() + "findAll");
  }

  save(body: RestInput<Vendedor>){
    return this.vendedorApi.post(this.getDefautContext() + "cadastrar", body);
  }

  delete(codigo: Number){
    return this.vendedorApi.delete(this.getDefautContext() + "delete/" + codigo);
  }
}
