import { Component } from '@angular/core';
import { Producto } from './interfaces/productos.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productos: Producto[] = [];
  prodcutos: string = "";

  ngOnInit(): void {

  }
}
