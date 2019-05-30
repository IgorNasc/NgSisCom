import { Injectable } from '@angular/core';

import { FornecedorData } from '../../integration/data/fornecedor.data';

import { Fornecedor } from '../model/fornecedor.model';
import { RestInput } from '../model/restinput.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(
    private fornecedorData : FornecedorData
  ) { }

  findAll(){
    return this.fornecedorData.findAll();
  }

  save(fornecedor: Fornecedor){
    let input = new RestInput<Fornecedor>();

    input.entity = fornecedor;

    return this.fornecedorData.save(input);
  }

  delete(fornecedor: Fornecedor){
    return this.fornecedorData.delete(fornecedor.codigo);
  }


}
