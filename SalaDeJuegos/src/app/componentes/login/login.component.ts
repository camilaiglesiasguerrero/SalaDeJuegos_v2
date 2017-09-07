import { Component, OnInit } from '@angular/core';
import { Login } from '../../Clases/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miUsuario : Login;

  constructor() { 
    this.miUsuario = new Login();
  }

  ngOnInit() {
  }
  
}
