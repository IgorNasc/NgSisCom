import { Injectable } from '@angular/core';

import { ProdutoApi } from '../api/Produto.api';

import { Produto } from '../../business/model/Produto.model';
import { RestInput } from '../../business/model/restinput.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoData {

  constructor(
    private produtodorApi: ProdutoApi
  ) { }

  getDefautContext(){
    return "produto/";
  }

  findAll(){
    return this.produtodorApi.get(this.getDefautContext() + "findAll");
  }

  findMinimo(){
    return this.produtodorApi.get(this.getDefautContext() + "findEstoqueLessThenMinimo");
  }

  save(body: RestInput<Produto>){
    return this.produtodorApi.post(this.getDefautContext() + "cadastrar", body);
  }

  delete(codigo: Number){
    return this.produtodorApi.delete(this.getDefautContext() + "delete/" + codigo);
  }
}
