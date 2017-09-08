import { Injectable } from '@angular/core';
import { Agilidad } from './Clases/agilidad';

@Injectable()
export class AppServiceService {
 
  constructor() { }

  public Listar() : Array<Juego>{
    //this.usuarios = this.af.database.list('/SalaDeJuegos') as fireBaseListObservable <any[]>;
    //return this.usuarios;
  }
}
