import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class productosService {

  private arrProductos: Producto[];
  id: number = 6;

  constructor() {
    this.arrProductos = [
      {
        id: 1,
        title: 'Tarta Manzana',
        price: 3,
        stock: true
      },
      {
        id: 2,
        title: 'Croissants',
        price: 1.2,
        stock: true
      },
      {
        id: 3,
        title: 'Donuts',
        price: 1.9,
        stock: false
      },
      {
        id: 4,
        title: 'Napolitanas Chocolate',
        price: 0.9,
        stock: true
      },
      {
        id: 5,
        title: 'Fartons',
        price: 1.2,
        stock: false
      },
    ]
  }
  getAll(): Producto[] {
    return this.arrProductos;
  }
  getByStock(pIsStock: boolean = true): Producto[]{
    return this.arrProductos.filter(producto => producto.stock === pIsStock);

  }

  getById(pId: number): Producto|any{
    return this.arrProductos.find(producto => producto.id === pId)
  }

  saveProduct(pForm: any): void{
    let newProducto = pForm
    newProducto.id = this.id
    this.arrProductos.push(newProducto);
    this.id++;
  }
  deleteById(pId: number): void{
    //opcion 1 filter
    this.arrProductos = this.arrProductos.filter(producto => producto.id !== pId)
    
    //opcion 2: findIndex - splice para borrarla
    
  }



  
}

