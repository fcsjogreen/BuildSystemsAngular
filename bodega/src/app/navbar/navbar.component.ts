import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productos: any[];
  badge: number;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCompra().subscribe(cart=>{
      this.badge = cart.length-1;
    })  
  }


  handleCompra(){
    this.router.navigateByUrl('/bodega/compra')
  }

  

}
