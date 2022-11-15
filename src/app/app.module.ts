import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { HijodeportesComponent } from './components/hijodeportes/hijodeportes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    HijococheComponent,

    PadrecochesComponent,
     PadredeportesComponent,
     HijodeportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
