import { FilmeReadComponent } from './components/views/filmes/filme-read/filme-read.component';
import { FilmeDeleteComponent } from './components/views/filmes/filme-delete/filme-delete.component';
import { FilmeUpdateComponent } from './components/views/filmes/filme-update/filme-update.component';
import { FilmeCreateComponent } from './components/views/filmes/filme-create/filme-create.component';
import { FilmeReadAllComponent } from './components/views/filmes/filme-read-all/filme-read-all.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/template/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path:'categorias/delete/:id',
    component:CategoriaDeleteComponent
  },
  {
    path:'categorias/update/:id',
    component:CategoriaUpdateComponent
  },
  {
    path:'categorias/:id_cat/filmes',
    component:FilmeReadAllComponent
  },
  {
    path:'categorias/:id_cat/filmes/create',
    component:FilmeCreateComponent
  },
  {
    path:'categorias/:id_cat/filmes/:id/update',
    component:FilmeUpdateComponent
  },
  {
    path:'categorias/:id_cat/filmes/:id/delete',
    component:FilmeDeleteComponent
  },
  {
    path:'categorias/:id_cat/filmes/:id/read',
    component:FilmeReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
