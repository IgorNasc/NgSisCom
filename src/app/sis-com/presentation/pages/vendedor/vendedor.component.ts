import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { VendedorService } from 'src/app/sis-com/business/service/vendedor.service';

import { Vendedor } from 'src/app/sis-com/business/model/vendedor.model';
import { RestOutput } from 'src/app/sis-com/business/model/RestOutPut.model';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'email', 'telefone', 'cpf', 'metaMensal', 'dataCad', 'action'];
  dataSource: MatTableDataSource<Vendedor>;
  vendedor: Vendedor;

  constructor(
    private vendedorService: VendedorService
  ) {
    this.getVendedores();
    this.vendedor = new Vendedor();
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

  getVendedores(){
    this.vendedorService.findAll().subscribe(
      (data: RestOutput<Vendedor>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sort = this.sort;
      },
      (error: any) => {

      }
    );
  }

  selectedTabChange(valor: any){
    if(valor.index == 0){
      this.getVendedores();
    }
  }

  onSubmit(){
    this.vendedorService.save(this.vendedor).subscribe(
      (data: RestOutput<Vendedor>) => {

      },
      (error: any) => {

      }
    );
  }

  onDelete(vendedor: Vendedor){
    this.vendedorService.delete(vendedor).subscribe(
      (data: RestOutput<Vendedor>) => {
        this.getVendedores();
      },
      (error: any) => {
        console.log("error")
      }
    );
  }

}
