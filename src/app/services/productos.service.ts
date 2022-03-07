import { Injectable } from '@angular/core';
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
        title: 'Manzanas',
        price: 1,
        stock: true
      },
      {
        id: 2,
        title: 'Peras',
        price: 2,
        stock: true
      },
      {
        id: 3,
        title: 'Plátanos',
        price: 3,
        stock: false
      },
      {
        id: 4,
        title: 'Naranjas',
        price: 4,
        stock: true
      },
      {
        id: 5,
        title: 'Uvas',
        price: 5,
        stock: false
      },
    ]
  }
  getAll() {
    return this.arrProductos;
  }
}
