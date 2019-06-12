import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';

import { ProdutoService } from 'src/app/sis-com/business/service/produto.service';

import { Produto } from 'src/app/sis-com/business/model/produto.model';
import { RestOutput } from 'src/app/sis-com/business/model/RestOutPut.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'precoUnitario', 'estoque', 'estoqueMinimo', 'dataCad', 'action'];
  dataSource: MatTableDataSource<Produto>;
  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private _snackBar: MatSnackBar
  ) {
    this.getProdutos();
    this.produto = new Produto();
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

  getProdutos(){
    this.produtoService.findAll().subscribe(
      (data: RestOutput<Produto>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        this._snackBar.open("Houve um erro ao tentar buscar os produtos.", "Done");
      }
    );
  }

  getProdutosMinimo(){
    this.produtoService.findMinimo().subscribe(
      (data: RestOutput<Produto>) => {
        this.dataSource = new MatTableDataSource(data.listEntity);
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        this._snackBar.open("Houve um erro ao tentar buscar os produtos.", "Done");
      }
    );
  }

  selectedTabChange(valor: any){
    if(valor.index == 0){
      this.getProdutos();
    }
  }

  onSubmit(){
    this.produtoService.save(this.produto).subscribe(
      (data: RestOutput<Produto>) => {
        this._snackBar.open("Salvo com sucesso.");
      },
      (error: any) => {
        this._snackBar.open("Houve um erro ao tentar salvar o produto.", "Done");
      }
    );
  }

  onDelete(produto: Produto){
    this.produtoService.delete(produto).subscribe(
      (data: RestOutput<Produto>) => {
        this.getProdutos();
        this._snackBar.open("Deletado com sucesso");
      },
      (error: any) => {
        this._snackBar.open("Houve um erro ao tentar deletar o produto.", "Done");
      }
    );
  }

}
