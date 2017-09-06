import { Component, OnInit } from '@angular/core';
import { Adivina } from '../../clases/adivina';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  miJuego : Adivina;

  constructor() {
    this.miJuego = new Adivina ("Adivina El Número");
   }

  ngOnInit() {
  }


}
