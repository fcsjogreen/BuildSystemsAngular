import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  productos: Product[];  

  constructor(private dataService: DataService) {
  }
  ngOnInit() {    
    this.dataService.getProductos().subscribe(product => {
      this.productos = product;   
    })
  }






}
