import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { C404Component } from './components/c404/c404.component';
import { ProductoViewComponent } from './components/producto-view/producto-view.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    ProductosComponent,
    ProductoCardComponent,
    C404Component,
    FormProductoComponent,
    ProductoViewComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
