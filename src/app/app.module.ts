import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './sis-com/system/router/app-routing.module';
import { HomeComponent } from './sis-com/presentation/pages/home/home.component';
import { MenuComponent } from './sis-com/presentation/components/menu/menu.component';

// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './sis-com/system/angular/custom-material-module.module';
import { FornecedorComponent } from './sis-com/presentation/pages/fornecedor/fornecedor.component';
import { PainelComponent } from './sis-com/presentation/pages/painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FornecedorComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
