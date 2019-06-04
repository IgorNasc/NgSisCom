import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

import { VendaService } from 'src/app/sis-com/business/service/venda.service';
import { ClienteService } from 'src/app/sis-com/business/service/cliente.service';
import { VendedorService } from 'src/app/sis-com/business/service/vendedor.service';
import { ProdutoService } from 'src/app/sis-com/business/service/produto.service';

import { Cliente } from 'src/app/sis-com/business/model/cliente.model';
import { Venda } from 'src/app/sis-com/business/model/venda.model';
import { ItemVenda } from 'src/app/sis-com/business/model/item.venda.model';
import { Produto } from 'src/app/sis-com/business/model/produto.model';
import { RestOutput } from 'src/app/sis-com/business/model/RestOutPut.model';
import { Vendedor } from 'src/app/sis-com/business/model/vendedor.model';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'formaPagto', 'cliente', 'vendedor', 'dataCad', 'action'];
  dataSource: MatTableDataSource<Venda>;
  venda: Venda;
  clientes: Array<Cliente>;
  vendedores: Array<Vendedor>;
  produtos: Array<Produto>;

  constructor(
    private vendaService: VendaService,
    private clienteService: ClienteService,
    private vendedorService: VendedorService,
    private produtoService: ProdutoService
  ) {
    this.getVendas();
    this.venda = new Venda();
    this.venda.listaVenda = new Array<ItemVenda>();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getClientes();
    this.getVendedores();
    this.getProdutos();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getVendas(){
    this.vendaService.findAll().subscribe(
      (data: RestOutput<Venda>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch(property) {
            case 'cliente': return item.cliente.nome;
            case 'vendedor': return item.vendedor.nome;
            default: return item[property];
          }
        };
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      (error: any) => {

      }
    );
  }

  getClientes(){
    this.clienteService.findAll().subscribe(
      (data: RestOutput<Cliente>) => {
        this.clientes = data.listEntity;
      },
      (error: any) => {

      }
    );
  }

  getVendedores(){
    this.vendedorService.findAll().subscribe(
      (data: RestOutput<Vendedor>) => {
        this.vendedores = data.listEntity;
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
      this.getVendas();
    }
  }

  onSubmit(){
    this.vendaService.save(this.venda).subscribe(
      (data: RestOutput<Venda>) => {

      },
      (error: any) => {

      }
    );
  }

  onDelete(venda: Venda){
    this.vendaService.delete(venda).subscribe(
      (data: RestOutput<Venda>) => {
        this.getVendas();
      },
      (error: any) => {
        console.log("error")
      }
    );
  }

  adicionarProduto(){
    this.venda.listaVenda.push(new ItemVenda);
  }

}
