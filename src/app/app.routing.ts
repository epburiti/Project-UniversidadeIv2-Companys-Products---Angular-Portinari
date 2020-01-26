import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { EmpresasLinksComponent } from './home/empresas-links/empresas-links.component';
import { ProdutosLinksComponent } from './home/produtos-links/produtos-links.component';
import { EmpresaComponent } from './cadastrar/empresa/empresa.component';
import { EmpresasComponent } from './listar/empresas/empresas.component';
import { ProdutoComponent } from './cadastrar/produto/produto.component';
import { ProdutosComponent } from './listar/produtos/produtos.component';



const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresas', component: EmpresasLinksComponent },
  { path: 'produtos', component: ProdutosLinksComponent },
  { path: 'empresas/listar', component: EmpresasComponent },
  { path: 'produto/cadastrar', component: ProdutoComponent },
  { path: 'produtos/listar', component: ProdutosComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); 