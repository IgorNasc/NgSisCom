import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from 'src/environments/environment';

import { RestInput } from '../../business/model/restinput.model';
import { Cliente } from '../../business/model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteApi {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDefautUrl(){
    return env.DEFAULT_URL_SISCOM;
  }

  get(context: String){
    return this.httpClient.get(this.getDefautUrl() + context)
  }

  post(context: String, body: RestInput<Cliente>){
    return this.httpClient.post(this.getDefautUrl() + context, body);
  }

  delete(context: String){
    return this.httpClient.delete(this.getDefautUrl() + context)
  }
}
