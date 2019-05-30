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

  save(fornecedor: Cliente){
    let input = new RestInput<Cliente>();

    input.entity = fornecedor;

    return this.clientData.save(input);
  }

  delete(fornecedor: Cliente){
    return this.clientData.delete(fornecedor.codigo);
  }
}
