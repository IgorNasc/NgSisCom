import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from 'src/environments/environment';

import { Fornecedor } from '../../business/model/fornecedor.model';
import { RestInput } from '../../business/model/restinput.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorApi {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDefautUrl(){
    return env.DEFAULT_URL_SISCOM;
  }

  get(context: String){
    return this.httpClient.get(this.getDefautUrl() + context)
  }

  post(context: String, body: RestInput<Fornecedor>){
    return this.httpClient.post(this.getDefautUrl() + context, body);
  }
}
