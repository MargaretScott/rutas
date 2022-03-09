import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  
  registroProducto: FormGroup;
  constructor(
    private productosService: productosService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { 
    this.registroProducto = new FormGroup({
      title: new FormControl("", []),
      price: new FormControl("", []),
      stock: new FormControl("", []),

    },[])
  }

  ngOnInit(): void {
    //cuando cargo este componente puede ocurrir dos cosas
    // - aparece en blanco - estoy registrando un nuevo producto - nuevo-producto
    // - me tendria que aperecer relleno - estoy actualizando - actualiar-producto/:idProducto

    //paso 1 capturar el id - activatedRoute
    //paso 2 con ese id pasado a numero hago una peticion al servicio y me traigo los datos con ese id
    //paso 3 los pinto dentro del formulario.
    this.activatedRouter.params.subscribe(params => {
      //aqui estoy discrimiando cuando el formulario se usa para registrar o para actualizar. Con la intención de reutilizar el mismo componente.
      if (params['idProducto'] !== undefined) {
        //Actualizando
        let id = parseInt(params['idProducto'])
        //traernos la informacion del producto con el id recibido, es info a quien se la pido? al services
        let producto = this.productosService.getById(id);
        //console.log(producto);
        this.registroProducto = new FormGroup({
          title: new FormControl(producto.title, []),
          price: new FormControl(producto.price, []),
          stock: new FormControl(producto.stock, []),
        }, [])

      }
    })
  }

  recogerDatosForm() {
    this.registroProducto.value.stock = (this.registroProducto.value.stock === 'true') ? true : false;
    //tenemos que enviar estos datos al array, ¿Donde esta array? ¿Que pasos tengo que seguir?
    this.productosService.saveProduct(this.registroProducto.value);
    //justo despues de llamar al servicios queremos redireccionar a una ruta dentro de aplicación.
    //para hacer una redirección necesitas un tercer injectable Router que me permite capturar eventos de ruta.
    this.router.navigate(['/productos'])
    //this.router.navigateByUrl('/productos')
    //router.navigate me permite dirigir mi navegación a cualquier ruta de dentro de mi pagina.
    // router tiene otro metodo que es navigateByUrl() que me permite cargar una ruta como string
    //para enlazar a una ruta externa es un href normal.
  }

}
