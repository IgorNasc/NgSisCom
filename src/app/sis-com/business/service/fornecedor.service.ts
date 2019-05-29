import { Injectable } from '@angular/core';

import { FornecedorData } from '../../integration/data/fornecedor.data';

import { Fornecedor } from '../model/fornecedor.model';
import { RestOutput } from '../model/RestOutPut.model';
import { Subscription } from 'rxjs';
import { RestInput } from '../model/restinput.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private findAllSubscription: Subscription;

  constructor(
    private fornecedorData : FornecedorData
  ) { }

  findAll(){
    return this.fornecedorData.findAll();
  }

  save(fornecedor: Fornecedor){
    let body = new RestInput<Fornecedor>();

    body.entity = fornecedor;

    return this.fornecedorData.save(body);
  }
}
