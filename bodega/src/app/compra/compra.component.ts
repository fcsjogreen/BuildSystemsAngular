import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../data.service'

import {Cart} from '../models/Cart'

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  productos: Cart[];
  cart: Cart[];
  total: number = 0;
  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit() {
    this.dataService.getCompra().subscribe(cart=>{
      this.productos = cart; 
      this.cart=this.productos.slice(1)
      this.cart.map(cart=>{
        this.total= this.total +  cart.subtotal;
      })
    })  
    
  }

  handleCancelar(){
    this.router.navigateByUrl('/bodega/buscar');    
  }

  handlePagar(){
    for(let i = 0; i<this.cart.length; i++){
      if(this.cart[i].id !="0"){
        this.dataService.deleteCompra(this.cart[i].id)
      }
    }
    this.total = 0;
    this.router.navigateByUrl('/bodega/buscar');
  }

}
