import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BodegaComponent } from './bodega/bodega.component';
import { VistaComponent } from './vista/vista.component';
import { CompraComponent } from './compra/compra.component';
import {BuscarComponent } from './buscar/buscar.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'bodega', component: BodegaComponent, 
            children:[
              { path: 'vista', component: VistaComponent },
              { path: 'compra', component: CompraComponent },
              { path: 'buscar', component: BuscarComponent }
            ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
