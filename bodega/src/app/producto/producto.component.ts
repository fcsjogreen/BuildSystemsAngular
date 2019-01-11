import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service'


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements  OnChanges {

  @Input() nombre: string;
  @Input() precio: number;
  @Input() cantidad: number;
  @Input() pId: any;
  numProductos = 0;
  

  constructor(private dataService: DataService, private router: Router) { }

  
  ngOnChanges(changes: SimpleChanges) {
    const cantidad = changes['cantidad'];
    if (cantidad.currentValue != cantidad.previousValue) {
      this.cantidad = cantidad.currentValue;
    }
  }

  handleAnadirCompra() {
    if (this.numProductos > 0) {
      this.cantidad = this.cantidad - this.numProductos;
      let subtotal = this.precio * this.numProductos;
      this.dataService.addCompra(this.nombre, this.numProductos, subtotal);
      this.dataService.updateProductos(this.pId, this.nombre, this.precio, this.cantidad);
      
      this.numProductos = 0;
    }
  }

  handleVerMas() {
    this.router.navigate(['/bodega/vista'], { queryParams: { nombre: this.nombre, cantidad: this.cantidad, precio: this.precio } });
  }

  handleIncrement() {
    if (this.numProductos < this.cantidad) {
      this.numProductos++;
    }
  }

  handleDecrement() {
    if (this.numProductos > 0) {
      this.numProductos--;
    }
  }


}
