import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';

import { Relatorio } from 'src/app/sis-com/business/model/relatorio.model';
import { RestOutput } from 'src/app/sis-com/business/model/RestOutPut.model';
import { RelatorioService } from 'src/app/sis-com/business/service/relatorio.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'quant', 'total'];
  dataSource: MatTableDataSource<Relatorio>;

  constructor(
    private relatorioService: RelatorioService,
    private _snackBar: MatSnackBar
  ) {
    this.getRelatorioVendaVendedor();
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

  getRelatorioVendaVendedor() {
    this.relatorioService.findAllVendaVendedor().subscribe(
      (data: RestOutput<Relatorio>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        this._snackBar.open("Houve um erro ao tentar gerar o relatorio.", "Done");
      }
    );
  }

  getRelatorioVendaCliente() {
    this.relatorioService.findAllVendaCliente().subscribe(
      (data: RestOutput<Relatorio>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        this._snackBar.open("Houve um erro ao tentar gerar o relatorio.", "Done");
      }
    );
  }

  getRelatorioCompraFornecedor() {
    this.relatorioService.findAllCompraFornecedor().subscribe(
      (data: RestOutput<Relatorio>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        this._snackBar.open("Houve um erro ao tentar gerar o relatorio.", "Done");
      }
    );
  }

  selectedTabChange(valor: any) {
    switch (valor.index) {
      case 0:
        this.getRelatorioVendaVendedor();
        break;
      case 1:
        this.getRelatorioVendaCliente();
        break;
      case 2:
        this.getRelatorioCompraFornecedor();
        break;
    }
  }

}
