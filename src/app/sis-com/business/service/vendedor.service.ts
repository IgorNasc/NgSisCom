import { Injectable } from "@angular/core";

import { RestInput } from '../../business/model/restinput.model';
import { Vendedor } from '../../business/model/vendedor.model';

import { VendedorData } from '../../integration/data/vendedor.data';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(
    private vendedorData : VendedorData
  ) { }

  findAll(){
    return this.vendedorData.findAll();
  }

  save(vendedor: Vendedor){
    let input = new RestInput<Vendedor>();

    input.entity = vendedor;

    return this.vendedorData.save(input);
  }

  delete(vendedor: Vendedor){
    return this.vendedorData.delete(vendedor.codigo);
  }
}
