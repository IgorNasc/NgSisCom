import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

import { CompraService } from 'src/app/sis-com/business/service/compra.service';
import { FornecedorService } from 'src/app/sis-com/business/service/fornecedor.service';

import { Fornecedor } from 'src/app/sis-com/business/model/fornecedor.model';
import { Compra } from 'src/app/sis-com/business/model/compra.model';
import { RestOutput } from 'src/app/sis-com/business/model/RestOutPut.model';
import { ItemCompra } from 'src/app/sis-com/business/model/item.compra.model';
import { Produto } from 'src/app/sis-com/business/model/produto.model';
import { ProdutoService } from 'src/app/sis-com/business/service/produto.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'fornecedor', 'dataCad', 'action'];
  dataSource: MatTableDataSource<Compra>;
  compra: Compra;
  fornecedores: Array<Fornecedor>;
  produtos: Array<Produto>;

  constructor(
    private compraService: CompraService,
    private fornecedorService: FornecedorService,
    private produtoService: ProdutoService
  ) {
    this.getCompras();
    this.getFornecedores();
    this.getProdutos();
    this.compra = new Compra();
    this.compra.listaCompra = new Array<ItemCompra>();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCompras(){
    this.compraService.findAll().subscribe(
      (data: RestOutput<Compra>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch(property) {
            case 'fornecedor': return item.fornecedor.nome;
            default: return item[property];
          }
        };
        this.dataSource.sort = this.sort;
        console.log(data.listEntity)
      },
      (error: any) => {

      }
    );
  }

  getFornecedores(){
    this.fornecedorService.findAll().subscribe(
      (data: RestOutput<Fornecedor>) => {
        this.fornecedores = data.listEntity;
      },
      (error: any) => {

      }
    );
  }

  getProdutos(){
    this.produtoService.findAll().subscribe(
      (data: RestOutput<Produto>) => {
        this.produtos = data.listEntity;
      },
      (error: any) => {

      }
    );
  }

  selectedTabChange(valor: any){
    if(valor.index == 0){
      this.getCompras();
    }
  }

  onSubmit(){
    this.compraService.save(this.compra).subscribe(
      (data: RestOutput<Compra>) => {

      },
      (error: any) => {

      }
    );
  }

  onDelete(compra: Compra){
    this.compraService.delete(compra).subscribe(
      (data: RestOutput<Compra>) => {
        this.getCompras();
      },
      (error: any) => {
        console.log("error")
      }
    );
  }

  adicionarProduto(){
    this.compra.listaCompra.push(new ItemCompra);
  }

}
