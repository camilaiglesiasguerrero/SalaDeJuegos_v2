import { Component, OnInit, Input } from '@angular/core';
import { Agilidad } from '../../Clases/agilidad';

@Component({
  selector: 'app-estado-de-resultados',
  templateUrl: './estado-de-resultados.component.html',
  styleUrls: ['./estado-de-resultados.component.css']
})
export class EstadoDeResultadosComponent implements OnInit {
  @Input() listado : any[];
  obj1 : Agilidad;

  constructor() {
    this.listado = new Array();
    this.obj1 = new Agilidad("agilidad");
    this.obj1.Gano=false;
    this.obj1.Jugador = "Juan"; 
    this.listado.push(this.obj1);
   }

  ngOnInit() {
    console.log(this.listado);
  }

}