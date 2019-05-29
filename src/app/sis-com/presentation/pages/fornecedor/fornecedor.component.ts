import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

import { FornecedorService } from 'src/app/sis-com/business/service/fornecedor.service';

import { Fornecedor } from 'src/app/sis-com/business/model/fornecedor.model';
import { RestOutput } from 'src/app/sis-com/business/model/RestOutPut.model';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss'],
  providers: [
    FornecedorService
  ]
})
export class FornecedorComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'cnpj', 'dataCad', 'email', 'nome', 'nomeContato', 'telefone'];
  dataSource: MatTableDataSource<Fornecedor>;
  fornecedor: Fornecedor;

  constructor(
    private fornecedorService: FornecedorService
  ) {
    this.getFornecedores();
    this.fornecedor = new Fornecedor();
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

  getFornecedores(){
    this.fornecedorService.findAll().subscribe(
      (data: RestOutput<Fornecedor>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sort = this.sort;
      },
      (error: any) => {

      }
    );
  }

  selectedTabChange(valor: any){
    if(valor.index == 0){
      this.getFornecedores();
    }
  }

  onSubmit(){
    console.log(this.fornecedor);
    this.fornecedorService.save(this.fornecedor).subscribe(
      (data: RestOutput<Fornecedor>) => {
        console.log("success");
      },
      (error: any) => {
        console.log("error");
      }
    );
  }

}
