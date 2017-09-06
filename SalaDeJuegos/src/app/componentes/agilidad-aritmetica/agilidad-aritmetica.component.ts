import { Component, OnInit } from '@angular/core';
import { Agilidad } from '../../clases/agilidad';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  elJuego : Agilidad;

  constructor() {
    this.elJuego = new Agilidad("Agilidad Aritmética");
   }

  ngOnInit() {
  }

}
