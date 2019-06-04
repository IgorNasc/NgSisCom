import { Injectable } from '@angular/core';

import { VendaData } from '../../integration/data/venda.data';

import { Venda } from '../model/venda.model';
import { RestInput } from '../model/restinput.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(
    private VendaData: VendaData
  ) { }

  findAll(){
    return this.VendaData.findAll();
  }

  save(venda: Venda){
    let input = new RestInput<Venda>();

    input.entity = venda;

    return this.VendaData.save(input);
  }

  delete(venda: Venda){
    return this.VendaData.delete(venda.codigo);
  }
}
