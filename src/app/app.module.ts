import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './sis-com/system/router/app-routing.module';
import { HomeComponent } from './sis-com/presentation/pages/home/home.component';
import { MenuComponent } from './sis-com/presentation/components/menu/menu.component';

// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './sis-com/system/angular/custom-material-module.module';
import { FornecedorComponent } from './sis-com/presentation/pages/fornecedor/fornecedor.component';
import { PainelComponent } from './sis-com/presentation/pages/painel/painel.component';
import { ClienteComponent } from './sis-com/presentation/pages/cliente/cliente.component';
import { ProdutoComponent } from './sis-com/presentation/pages/produto/produto.component';
import { ComprasComponent } from './sis-com/presentation/pages/compras/compras.component';
import { VendedorComponent } from './sis-com/presentation/pages/vendedor/vendedor.component';
import { VendaComponent } from './sis-com/presentation/pages/venda/venda.component';
import { RelatoriosComponent } from './sis-com/presentation/pages/relatorios/relatorios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FornecedorComponent,
    PainelComponent,
    ClienteComponent,
    ProdutoComponent,
    ComprasComponent,
    VendedorComponent,
    VendaComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
