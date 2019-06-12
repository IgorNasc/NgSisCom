import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatSnackBar} from '@angular/material';

import { FornecedorService } from 'src/app/sis-com/business/service/fornecedor.service';

import { Fornecedor } from 'src/app/sis-com/business/model/fornecedor.model';
import { RestOutput } from 'src/app/sis-com/business/model/RestOutPut.model';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss'],
  providers: [
    FornecedorService
  ]
})
export class FornecedorComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'cnpj', 'dataCad', 'email', 'nome', 'nomeContato', 'telefone', 'action'];
  dataSource: MatTableDataSource<Fornecedor>;
  fornecedor: Fornecedor;

  constructor(
    private fornecedorService: FornecedorService,
    private _snackBar: MatSnackBar
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
        this._snackBar.open("Houve um erro ao tentar buscar fornecedores.", "Done");
      }
    );
  }

  selectedTabChange(valor: any){
    if(valor.index == 0){
      this.getFornecedores();
    }
  }

  onSubmit(){
    this.fornecedorService.save(this.fornecedor).subscribe(
      (data: RestOutput<Fornecedor>) => {
        if(data.listWarn != null){
          this._snackBar.open(data.listWarn[0].toString());
        } else{
          this._snackBar.open("Salvo com sucesso.");
        }
      },
      (error: any) => {
        this._snackBar.open("Houve um erro ao tentar salvar o fornecedor.", "Done");
      }
    );
  }

  onDelete(fornecedor: Fornecedor){
    this.fornecedorService.delete(fornecedor).subscribe(
      (data: RestOutput<Fornecedor>) => {
        this.getFornecedores();
        if(data.listWarn != null){
          this._snackBar.open(data.listWarn[0].toString());
        } else{
          this._snackBar.open("Deletedo com sucesso.");
        }
      },
      (error: any) => {
        this._snackBar.open("Houve um erro ao tentar deletar o fornecedor.", "Done");
      }
    );
  }

}
