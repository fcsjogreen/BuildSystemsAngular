import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ProductoComponent } from './producto/producto.component';
import { VistaComponent } from './vista/vista.component';
import { CompraComponent } from './compra/compra.component';
import { BodegaComponent } from './bodega/bodega.component';

import {environment} from '../environments/environment';
import { LoginService } from './login.service';
import { DataService } from './data.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BuscarComponent,
    ProductoComponent,
    VistaComponent,
    CompraComponent,
    BodegaComponent
  ],
  imports: [   
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'bodega'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgbModule,
    FormsModule
  ],
  providers: [LoginService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
