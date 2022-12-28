import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';



@NgModule({
  declarations: [
    NavBarComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactosComponent
  ]
})
export class UsuarioModule { }
