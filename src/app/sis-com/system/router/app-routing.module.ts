import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Pages created
import { HomeComponent } from '../../presentation/pages/home/home.component';
import { PainelComponent } from '../../presentation/pages/painel/painel.component';
import { FornecedorComponent } from '../../presentation/pages/fornecedor/fornecedor.component';
import { ClienteComponent } from '../../presentation/pages/cliente/cliente.component';
import { ProdutoComponent } from '../../presentation/pages/produto/produto.component';
import { ComprasComponent } from '../../presentation/pages/compras/compras.component';
import { VendedorComponent } from '../../presentation/pages/vendedor/vendedor.component';
import { VendaComponent } from '../../presentation/pages/venda/venda.component';
import { RelatoriosComponent } from '../../presentation/pages/relatorios/relatorios.component';

const SisComRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '', component: PainelComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'fornecedor', component: FornecedorComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'produto', component: ProdutoComponent },
    { path: 'comprar', component: ComprasComponent },
    { path: 'vendedor', component: VendedorComponent },
    { path: 'venda', component: VendaComponent },
    { path: 'relatorios', component: RelatoriosComponent }
  ] },
  { path: 'administrador', component: PainelComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      SisComRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
