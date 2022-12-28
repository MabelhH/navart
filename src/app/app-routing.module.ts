import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent } from './usuario/inicio/inicio.component';
import {NosotrosComponent } from './usuario/nosotros/nosotros.component';
import {ServiciosComponent } from './usuario/servicios/servicios.component';
import {ContactosComponent } from './usuario/contactos/contactos.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'contactos', component:ContactosComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
