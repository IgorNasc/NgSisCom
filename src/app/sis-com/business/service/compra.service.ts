import { Injectable } from '@angular/core'

import { CompraData } from '../../integration/data/compra.data';

import { RestInput } from '../../business/model/restinput.model';
import { Compra } from '../../business/model/compra.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(
    private compraData: CompraData
  ) { }

  findAll(){
    return this.compraData.findAll();
  }

  save(compra: Compra){
    let input = new RestInput<Compra>();

    input.entity = compra;

    return this.compraData.save(input);
  }

  delete(compra: Compra){
    return this.compraData.delete(compra.codigo);
  }
}
