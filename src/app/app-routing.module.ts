import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoViewComponent } from './components/producto-view/producto-view.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  /*{path: "ruta",component: HomeComponent}*/
  /*{path:"", pathMatch:'full', component:HomeComponent},*/
  { path:"", pathMatch:'full', redirectTo:'/home'},
  { path: "home", component: HomeComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "productos", component: ProductosComponent },
  { path: "producto/:id", component: ProductoViewComponent },
  { path: "nuevo-producto", component: FormProductoComponent },
  { path:"actualizar-producto/:idProducto", component: FormProductoComponent},
  { path: "**", component: C404Component}
  //{path:"**", redirecTo:'/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
