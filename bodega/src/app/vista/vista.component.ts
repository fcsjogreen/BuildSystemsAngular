import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  nombre: string;
  precio: string;
  cantidad: string;

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.route.snapshot.queryParamMap.get("nombre");
    this.cantidad = this.route.snapshot.queryParamMap.get("cantidad");
    this.precio = this.route.snapshot.queryParamMap.get("precio");
  }

  handleAtras(){  
      this.router.navigateByUrl('/bodega/buscar');    
  }

}
