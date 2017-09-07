import { Injectable } from '@angular/core';
//import { AngularFire, fireBaseListObservable } from 'angularFire2'; 

@Injectable()
export class AppServiceService {
 // usuarios: fireBaseListObservable <any[]>;

  //constructor(private af:AngularFire) { }

  getUsuarios(){
    //this.usuarios = this.af.database.list('/SalaDeJuegos') as fireBaseListObservable <any[]>;
    //return this.usuarios;
  }
}
