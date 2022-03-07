import { Component,  OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';
import { productosService } from 'src/app/services/productos.service';




@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  productos: Producto[] = [];
  constructor(private productodeservicio: productosService) { }

  ngOnInit(): void {
    this.productos = this.productodeservicio.getAll();
    // console.log(this.productos)
  }


}
