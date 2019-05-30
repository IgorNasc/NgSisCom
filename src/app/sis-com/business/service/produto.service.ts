import { Injectable } from '@angular/core';

import { ProdutoData } from '../../integration/data/produto.data';

import { Produto } from '../model/produto.model';
import { RestInput } from '../model/restinput.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private produtoData : ProdutoData
  ) { }

  findAll(){
    return this.produtoData.findAll();
  }

  save(produto: Produto){
    let input = new RestInput<Produto>();

    input.entity = produto;

    return this.produtoData.save(input);
  }

  delete(produto: Produto){
    return this.produtoData.delete(produto.codigo);
  }
}
