import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Pages created
import { HomeComponent } from '../../presentation/pages/home/home.component';
import { PainelComponent } from '../../presentation/pages/painel/painel.component';
import { FornecedorComponent } from '../../presentation/pages/fornecedor/fornecedor.component';

const SisComRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '', component: PainelComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'fornecedor', component: FornecedorComponent },
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
