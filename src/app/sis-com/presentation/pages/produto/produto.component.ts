import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Produto } from 'src/app/sis-com/business/model/produto.model';
import { ProdutoService } from 'src/app/sis-com/business/service/produto.service';
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
    private produtoService: ProdutoService
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

      },
      (error: any) => {

      }
    );
  }

  onDelete(produto: Produto){
    this.produtoService.delete(produto).subscribe(
      (data: RestOutput<Produto>) => {
        this.getProdutos();
      },
      (error: any) => {
        console.log("error")
      }
    );
  }

}
