import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interface';
import { productosService } from 'src/app/services/productos.service';



@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.css']
})
export class ProductoViewComponent implements OnInit {

  producto: Producto|any
  constructor(
    private productosService: productosService,
    private activatedRoute: ActivatedRoute
  ) { }

ngOnInit(): void {
    //necesito pedir un producto al servicio necesito algo que me seleccion un producto concreto - id producto

    //cuando cargue el componente miro la ruta y cojo la parte dinamica que es la que me da el id del producto. ActivatedRoute - captura de ruta activa - injectable

    //observable - tiene un metodo subscribe
    this.activatedRoute.params.subscribe((params) => {
      //console.log(params)
      let id = parseInt(params['idProducto'])
      //console.log(id);
      //aqui dentro es donde tendre que llamar al servicio para obtener un producto
      this.producto = this.productosService.getById(id)
    })

  
  }

}