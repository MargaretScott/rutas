import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';
import { productosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent implements OnInit {

  @Input() miProducto: Producto | any
  constructor(private productoServices: productosService
  ) { }

  ngOnInit(): void

  {  }
  borrarProducto(pId: number) {
  //llamar al servicio a un metodo deleteById pasarle el id del producto y eliminarlo del array
this.productoServices.deleteById(pId)
}

}
