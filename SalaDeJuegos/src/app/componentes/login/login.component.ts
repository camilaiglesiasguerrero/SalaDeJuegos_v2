import { Component, OnInit } from '@angular/core';
import { Login } from '../../Clases/login';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miUsuario : Login;
  
  constructor(private route: ActivatedRoute, private router: Router){
   this.miUsuario = new Login(route,router);
  }

  ngOnInit() {
  }
  
  
  
}
