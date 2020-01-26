import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasLinksComponent } from './empresas-links.component';
import { EmpresasComponent } from 'src/app/listar/empresas/empresas.component';
import { EmpresasRoutingModule } from './empresas.routing.module';
import { PoModule } from '@portinari/portinari-ui';


@NgModule({
  declarations: [
    EmpresasLinksComponent,
    EmpresasComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    PoModule
  ],
  providers: [],
  bootstrap: []
})
export class EmpresasModule { }