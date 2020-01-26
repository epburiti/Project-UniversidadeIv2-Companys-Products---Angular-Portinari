import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { routing } from './app.routing';

import { ProdutosComponent } from './listar/produtos/produtos.component';
import { EmpresaComponent } from './cadastrar/empresa/empresa.component';
import { ProdutoComponent } from './cadastrar/produto/produto.component';
import { ProdutosLinksComponent } from './home/produtos-links/produtos-links.component';
import { EmpresasModule } from './home/empresas-links/empresas.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    ProdutosComponent,
    EmpresaComponent,
    ProdutoComponent,
    ProdutosLinksComponent,

  ],
  imports: [
    EmpresasModule,
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
