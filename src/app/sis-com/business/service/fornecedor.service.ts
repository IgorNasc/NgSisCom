import { Injectable } from '@angular/core';
import { FornecedorData } from '../../integration/data/fornecedor.data';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private forncedorData : FornecedorData) { }
}
