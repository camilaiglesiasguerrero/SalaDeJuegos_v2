import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tipo : string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  Juego(){
    switch (this.tipo){
      case 'adivina':
          this.router.navigate(['/adivina']);
        break;
      case 'agilidad':
          this.router.navigate(['/agilidad']);
        break;
    }
  }


}
