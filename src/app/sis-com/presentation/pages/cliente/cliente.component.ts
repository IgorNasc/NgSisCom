import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

import { ClienteService } from 'src/app/sis-com/business/service/cliente.service';

import { Cliente } from 'src/app/sis-com/business/model/cliente.model';
import { RestOutput } from 'src/app/sis-com/business/model/RestOutPut.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers: [
    ClienteService
  ]
})
export class ClienteComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'email', 'telefone', 'cpf', 'limiteCredito', 'dataCad', 'action'];
  dataSource: MatTableDataSource<Cliente>;
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService
  ) {
    this.getClientes();
    this.cliente = new Cliente();
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

  getClientes(){
    this.clienteService.findAll().subscribe(
      (data: RestOutput<Cliente>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sort = this.sort;
      },
      (error: any) => {

      }
    );
  }

  selectedTabChange(valor: any){
    if(valor.index == 0){
      this.getClientes();
    }
  }

  onSubmit(){
    this.clienteService.save(this.cliente).subscribe(
      (data: RestOutput<Cliente>) => {

      },
      (error: any) => {

      }
    );
  }

  onDelete(cliente: Cliente){
    this.clienteService.delete(cliente).subscribe(
      (data: RestOutput<Cliente>) => {
        this.getClientes();
      },
      (error: any) => {
        console.log("error")
      }
    );
  }

}
