import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  /*{path: "ruta",component: HomeComponent}*/
  { path: "home", component: HomeComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "productos", component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
