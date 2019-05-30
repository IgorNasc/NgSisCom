import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from 'src/environments/environment';

import { Produto } from '../../business/model/produto.model';
import { RestInput } from '../../business/model/restinput.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoApi {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDefautUrl(){
    return env.DEFAULT_URL_SISCOM;
  }

  get(context: String){
    return this.httpClient.get(this.getDefautUrl() + context)
  }

  post(context: String, body: RestInput<Produto>){
    return this.httpClient.post(this.getDefautUrl() + context, body);
  }

  delete(context: String){
    return this.httpClient.delete(this.getDefautUrl() + context)
  }
}
