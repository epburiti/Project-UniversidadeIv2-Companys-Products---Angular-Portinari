import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpresaComponent } from 'src/app/cadastrar/empresa/empresa.component';


const empresasRoutes = [
  { path: 'empresa/cadastrar', component: EmpresaComponent }
]

@NgModule({
  imports: [RouterModule.forChild(empresasRoutes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }