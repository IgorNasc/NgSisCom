import { Injectable } from '@angular/core';

import { ClienteData } from '../../integration/data/cliente.data';

import { Cliente } from '../model/cliente.model';
import { RestInput } from '../model/restinput.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private clientData: ClienteData
  ) { }

  findAll(){
    return this.clientData.findAll();
  }

  save(cliente: Cliente){
    let input = new RestInput<Cliente>();

    input.entity = cliente;

    return this.clientData.save(input);
  }

  delete(cliente: Cliente){
    return this.clientData.delete(cliente.codigo);
  }
}
