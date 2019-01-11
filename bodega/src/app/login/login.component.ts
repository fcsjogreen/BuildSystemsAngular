import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myUser: User[];
  newUser = {
    nombre: "",
    contrasena: ""

  }

  errorIngreso: boolean= false;
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {  
    this.loginService.getUsers().subscribe(users=>{
      this.myUser = users;      
    });
  }

  validateLogin(){     
    if(this.newUser.nombre && this.newUser.nombre){      
      for(let i = 0; i< this.myUser.length; i++){        
        if(this.newUser.nombre == this.myUser[i].nombre && this.newUser.contrasena == this.myUser[i].contrasena){
          this.errorIngreso=false;
          this.loginService.setLoggedInUser(this.newUser.nombre)
          this.router.navigateByUrl('/bodega/buscar')

        }else{
          this.errorIngreso=true;
        }
      }
    }
    console.log(this.errorIngreso);
  } 
  
}